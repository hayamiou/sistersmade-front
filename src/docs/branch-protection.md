# 🛡️ GitHub Branch Protection Rules – SisterSmade Front

This file documents the branch protection rules set for this project.

---

## 🔒 `production` branch

- ✅ Direct pushes are blocked (`Do not allow direct pushes`)
- ✅ Only merge via Pull Request (PR)
- ✅ At least 1 approval required
- ✅ Repository owner must approve each PR
- ✅ CI/CD enabled: tests + build + deployment

---

## 🧪 `staging` branch

- ✅ Only merge via Pull Request (PR)
- ✅ Review required by the project mentor
- ❌ Direct pushes allowed (in case of emergency)
- ✅ CI/CD enabled: unit tests, E2E tests, build + deployment
- ✅ The VPS listens to this branch via webhook to auto-deploy the Docker image

---

## 🌱 `develop` branch

- ✅ Merge via Pull Request recommended (not mandatory)
- ❌ No required review
- ✅ Direct pushes allowed
- 🔁 Used for daily development

---

## 🧠 Helpful notes

- These rules can be updated in `Settings > Branches > Add/Edit rule`
- To simulate teamwork, protections are enforced even in a solo project
- For CDA presentations or emergencies, direct pushes to `staging` remain possible

---

Last updated: `April 16, 2025`
