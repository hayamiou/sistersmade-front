.PHONY: dev build lint format test check \
        scripts-exec help

# === DEV ===
dev:
	npm run start

build:
	npm run build

lint:
	npm run lint

format:
	npx prettier --write .

test:
	npm run test

check: build lint format test

# === SCRIPTS ===
scripts-exec:
	find scripts -type f -name "*.sh" -exec chmod +x {} \;

# === HELP ===
help:
	@echo ""
	@echo "🎨 Sistersmade Front Makefile"
	@echo "-----------------------------"
	@echo "🧪 Dev & Build"
	@echo "  make dev         → Start Angular dev server"
	@echo "  make build       → Build Angular app"
	@echo ""
	@echo "🔍 Quality"
	@echo "  make lint        → Run linter"
	@echo "  make format      → Format code (Prettier)"
	@echo "  make test        → Run unit tests"
	@echo "  make check       → ✅ Full check: build + lint + format + test"
	@echo ""
	@echo "🛠️ Scripts"
	@echo "  make scripts-exec → Make all scripts executable"
	@echo ""
