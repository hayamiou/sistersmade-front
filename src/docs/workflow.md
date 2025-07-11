# 🌿 Git Workflow – Sistersmade Front

This file describes the **branching workflow** used in the _Sistersmade Front_ project.

---

## 🔱 Main Branches

| Branch       | Purpose                                                         |
| ------------ | --------------------------------------------------------------- |
| `develop`    | Active development branch – all features start from here        |
| `staging`    | Pre-production – used for testing and validation before release |
| `production` | Final production branch – reflects the live version             |

---

## 🌱 Branch Naming Convention

| Type           | Prefix      | Example                     |
| -------------- | ----------- | --------------------------- |
| Feature        | `feat/`     | `feat/create-dashboard`     |
| Bugfix         | `fix/`      | `fix/user-filter`           |
| Refactor       | `refactor/` | `refactor/course-model`     |
| Documentation  | `docs/`     | `docs/workflow-update`      |
| Tests          | `test/`     | `test/user-search`          |
| Technical Task | `chore/`    | `chore/update-dependencies` |

---

## 🔁 Typical Development Cycle

```bash
# 1. Create a new feature branch
git checkout develop
git checkout -b feat/new-feature

# 2. Work, commit and push
git add .
git commit -m "feat: add new feature"
git push -u origin feat/new-feature

# 3. Merge into develop
git checkout develop
git merge feat/new-feature
git push

# 4. Merge develop into staging for tests
git checkout staging
git merge develop
git push

# 5. Merge staging into production for final release
git checkout production
git merge staging
git push
```

---

Last updated: `April 16, 2025`
