# Git Rules

## Commits

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/),
  enforced by commitlint in the husky `commit-msg` hook. Never bypass it with
  `--no-verify`; fix the message instead.
- Scope is the package directory name: `fix(popover): ...`, `feat(form-control): ...`.
  Leave the scope off for changes outside a package (`docs: ...`, `ci: ...`).
  Recent commits use scopes; older history is mostly unscoped and often uses
  `chore:` for package changes. Don't copy that, because the type now drives the version.
- Description is lowercase and imperative: `fix(tooltip): keep tooltips on-screen`.
- Changesets aren't part of every commit. They're added when the user asks,
  usually after testing, and committed as `chore: add changeset for ...`.
- Mark breaking changes with `!` and a `BREAKING CHANGE:` footer explaining the migration.
- The commit type decides the version bump. See `.claude/rules/versioning.md`.
- One package per commit when practical, so the type and scope describe the
  whole commit.

## Release flow (CI)

- Pushing changesets to `main` makes the Release workflow open a
  "🚀 Version Packages" PR. Merging it publishes to npm and commits
  `chore: version bump from changesets`.
- Pushing docs changes to `main` rebuilds and deploys the docs site.
