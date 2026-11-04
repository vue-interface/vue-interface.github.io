---
name: changeset
description: "Write the .changeset/*.md file for one or more @vue-interface/* packages, choosing each package's bump from its Conventional Commits type. Use when the user asks for a changeset or version bump, or says a change is tested and ready to 'release' or 'version'. Not automatic per commit: the user adds changesets after testing, so ask first. Not for running changeset version or publishing; CI does that."
---

# Changeset

Follow `.claude/rules/versioning.md` for the bump rules. This skill is the
procedure.

Only run it when the user asks. If you think a change is ready, ask whether
to add the changeset now; don't create one unprompted. A changeset usually
covers several commits made since the last release.

## 1. Find what changed

```bash
git status --short
git diff --stat main...HEAD
git log --format='%s' main..HEAD
ls .changeset
```

- Changed packages are the `packages/<dir>/` folders with changes outside
  `docs/`, `README.md`, `index.html` and `demo.css` (those aren't released
  on their own).
- Check `.changeset/` for an existing changeset covering this work. Update it
  instead of adding a second one.

## 2. Pick the bump per package

Use the commit type (or the type the change *should* have, if not committed
yet). If no commit message exists yet, propose one along with the changeset.

| Change in the package | Commit | Bump |
|---|---|---|
| New prop, slot, event, export, utility, CSS variable, variant | `feat(<dir>)` | `minor` |
| Bug fix, visual fix, type fix with no runtime change | `fix(<dir>)` | `patch` |
| Performance improvement | `perf(<dir>)` | `patch` |
| Anything on the breaking list in the versioning rule | `feat(<dir>)!` / `fix(<dir>)!` | `major` |
| Docs, formatting, tests, CI, tooling only | `docs` / `style` / `ci` / `chore` | no changeset |

Each package gets its own bump: a change that adds a feature to `form-control`
and fixes `input-field` to use it is `minor` for one and `patch` for the other.

If the commit type and the change disagree (a `fix` that adds a prop), point it
out and ask which is right before writing.

## 3. Check dependents

A released package bumps every package that peer-depends on it, as a **major**
with the current changesets config. List them:

```bash
node -e "const fs=require('fs');const t='@vue-interface/'+process.argv[1];for(const d of fs.readdirSync('packages')){try{const p=JSON.parse(fs.readFileSync('packages/'+d+'/package.json'));if(p.peerDependencies&&p.peerDependencies[t])console.log(p.name)}catch{}}" <dir>
```

If there are any, tell the user which packages will get new majors. Don't add
changesets for them; changesets does it.

## 4. Write the file

Name it in kebab-case, either three random words like the CLI does
(`.changeset/loose-snakes-enter.md`) or a short description of the change
(`.changeset/tooltip-close-on-click.md`). Both appear in the history.

```md
---
"@vue-interface/form-control": minor
---

Add a base `form-label` utility so standalone field labels have default styling.
```

- Summary: the changelog entry, in sentence case, describing what changed for
  users. Put props, slots, events and classes in backticks.
- For a `major`, add a blank line and a short paragraph: what broke and how
  to migrate.

## 5. Check it

```bash
pnpm changeset status --verbose
```

It should list exactly the packages and bumps you intended, plus the
dependents from step 3. If the user asks you to commit it, use
`chore: add changeset for <what changed>`.
