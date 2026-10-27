# `.github/workflows/`

This directory holds GitHub Actions workflows that run on every push and PR.

## `ci.yml` — the baseline workflow

This is the **deliberately slow** baseline that ships with the repo. It exists to give students something concrete to improve in Workshop 3. Don't be alarmed by how long it takes (~3–5 minutes on a clean fork) — that's the point.

Workshop 3 students improve this file in place, following the recipe in [`workshops/03-cicd/optimization-recipe.md`](../../workshops/03-cicd/optimization-recipe.md). They commit one optimization at a time and watch the duration drop in the Actions tab.

## What's *not* here yet

- No nightly coverage workflow (Workshop 3 Step 3 adds it as `coverage.yml`).
- No matrix/shard configuration (Workshop 3 Steps 6 and 7 add them).
- No branch protection rules (those are configured in the GitHub UI; Workshop 7 covers it).

These omissions are intentional. The lesson is the gap.

