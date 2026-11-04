# Versioning Rules

Every published package is versioned independently with semver. The bump comes
from the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
type of the change and is recorded in a changeset (`changeset` skill).

## Commit type → bump

| Commit | Bump |
|---|---|
| `feat(<pkg>): ...` | `minor` |
| `fix(<pkg>): ...`, `perf(<pkg>): ...` | `patch` |
| Any type with `!` (`feat(<pkg>)!: ...`) or a `BREAKING CHANGE:` footer | `major` |
| `docs`, `style`, `test`, `ci`, `chore` | none, no changeset |
| `refactor`, `build` | none by default; `patch` only if the user wants the change released |

The commit and its changeset must agree: a `feat` commit with a `patch`
changeset, or a breaking change without `!`, is wrong. Fix the commit type,
don't fudge the bump.

`style` means code formatting, not CSS. A visual change to a component's CSS is
a `fix` (corrects something) or a `feat` (adds a variant, variable, utility).

## What counts as breaking (major)

Anything that can break an app that upgrades without changing its code:

- Removing or renaming a prop, slot, slot prop, event, exposed method, export or type
- Changing a prop's type or default so existing usage renders or behaves differently
- Removing or renaming a `--<component>-*` CSS variable, a `@utility` class, or a
  size/color modifier
- Changing markup or class names that consumers are likely to target
- Raising the minimum version of a peer dependency (`vue`, `@floating-ui/vue`, ...)

Adding any of these is `minor`. Making a wrong type correct without changing
runtime behavior is `patch`.

## When to add a changeset

Not every commit to a package gets a changeset. The user adds the version bump
once the change is tested and they're satisfied with it, often after several
commits. So:

- Don't create a changeset unprompted, and don't treat a missing one as an error.
- When a change looks finished, ask whether to add the changeset now or later.
- One changeset can cover several commits. Pick the bump from the most
  significant commit for each package (any breaking → `major`, else any
  `feat` → `minor`, else `patch`).

## Changesets

- One changeset per release-worthy change, listing each package the change touches, each with
  its own bump. A package with no published change (docs only) is left out.
- The summary is the changelog entry: one or two sentences in sentence case
  describing the change from a user's point of view, with props, slots and
  classes in backticks. For example:
  ``Add a `searchable` prop (default `true`). Set `:searchable="false"` to disable filtering.``
- For `major`, add a short paragraph after the summary saying what breaks and
  how to migrate.
- Never edit `CHANGELOG.md` or `version` fields, and never run
  `changeset version`, `changeset publish` or `pnpm release`. CI does that.

## Dependents are bumped automatically

Internal dependencies are `peerDependencies` with `workspace:*`. When a package
is released, changesets bumps every package that depends on it, and with the
current config that bump is **major**, even for a patch or minor change. For
example, a `minor` to `form-control` released all eight `*-field` packages as
new majors.

- Don't add changesets for dependents yourself; changesets handles them.
- When a changeset touches a shared package (`sizeable`, `form-control`,
  `activity-indicator`, `btn`, `badge`, `dropdown-menu`, `autogrow`, `input-field`),
  tell the user which dependents will get a major bump before committing.
