---
name: verify
description: "Check changed @vue-interface/* packages before they're committed: build each changed package (and its dependents) with --filter, lint only the changed files, and look at the docs page in the browser pane in light and dark mode. Use after changing a package, before a commit or changeset, or when the user asks to verify, check, test or make sure a change works. This repo has no test suite, so this is the check. Not for writing changesets or for linting the whole repo."
---

# Verify

There are no tests, so a change is checked in three ways: it builds, it lints
clean, and it renders. Run every step that applies, then report one line per
package.

## 1. Find what changed

From the repo root:

```bash
{ git diff --name-only HEAD; git ls-files --others --exclude-standard; } | sort -u
```

On a branch with commits, add `git diff --name-only main...HEAD`. The changed
packages are the `packages/<dir>/` prefixes. If only files outside `packages/`
changed (for example `docs/` or root config), skip to step 4.

For each changed package, list its dependents. These are the packages that have
it in `peerDependencies`:

```bash
node -e "const fs=require('fs');const t='@vue-interface/'+process.argv[1];for(const d of fs.readdirSync('packages')){try{const p=JSON.parse(fs.readFileSync('packages/'+d+'/package.json'));if(p.peerDependencies&&p.peerDependencies[t])console.log(d)}catch{}}" <dir>
```

Dependents compile against the changed package's source through the `source`
export condition. A changed prop or type can break them without any of their own
files changing.

## 2. Build

Run this for each changed Vue package and each of its dependents:

```bash
pnpm --filter @vue-interface/<dir> build
```

- CSS-only packages (`btn`, `breadcrumb`, `pagination`) and `sizeable` have no
  build. Skip them, but still build their dependents.
- A failure is `vue-tsc` (a type error, with file and line) or `vite build`.
  Report the error as is. Fix it only if it's in code this change touched.
- If a dependent fails, read the error. If it points at something the change
  renamed, removed or retyped, the change broke it, and that may make the change
  breaking (`.claude/rules/versioning.md`). If it's unrelated, say it looks
  pre-existing. Don't stash or reset the user's work to find out.
- Builds write `dist/`, which is gitignored. Leave it.

## 3. Lint the changed files

Lint only the changed `.ts` and `.vue` files under `packages/`, not the whole repo:

```bash
npx eslint <file> <file> ...
```

Lint is clean across the repo, so every problem reported in a changed file
counts against the change. Fix it if it's in code the change touched. If one
looks unrelated, check whether `main` already had it before blaming the change:

```bash
git show HEAD:<file> | npx eslint --stdin --stdin-filename <file>
```

## 4. Render

This step applies when a component, its CSS, a demo, or a docs page changed. Skip it for
type-only or `package.json`-only changes.

1. Start the `docs` server from `.claude/launch.json` with `preview_start`. Open
   `http://localhost:5173/packages/<dir>/` for each changed package, and for each
   dependent whose output the change affects.
2. Read the console messages and look for errors. Missing-import and Vue warnings
   point at the change.
3. Look at the page and the examples that use what changed:
   - The section or prop that changed renders and behaves as intended. Click,
     open or type where it's interactive.
   - Every size and color example still renders.
4. Check dark mode with `resize_window` and `colorScheme: "dark"`, then switch it
   back to `"light"`. VitePress follows the system setting.
5. Take one screenshot of the changed section to show the user.

If the package's `index.html` demo changed and the docs page doesn't cover it,
start the `demo` entry instead. First set its `--filter` to the package in
`.claude/launch.json`.

## 5. Report

Report one line per package: `build ✓/✗`, `lint ✓ / N new problems`,
`docs ✓/✗`, and which steps were skipped and why. List every failure with its
output. If everything passes and the change looks finished, ask whether to
commit or add a changeset, following `.claude/rules/versioning.md`. Don't do
either unasked.
