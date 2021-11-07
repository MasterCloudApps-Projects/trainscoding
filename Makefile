# Include all variables defined in Makefile.vars
include Makefile.vars

# Defines what services or packages will be targeted
scope:=$(SCOPE)
BUILD_SCOPE:=all

create-env:
	@./scripts/create-env

.PHONY: build
build:
	npm ci
	npm run build:$(BUILD_SCOPE) --service=@trainscoding/$(SERVICE_NAME)

# Spin up development environment
.PHONY: up
up: create-env
	$(MAIN_DOCKER_COMPOSE) up --abort-on-container-exit

.PHONY: test
test:
ifdef scope
	$(SCOPED_TEST_DOCKER_COMPOSE) up --abort-on-container-exit
else
	$(TEST_DOCKER_COMPOSE) up --abort-on-container-exit
endif

.PHONY: lint
lint: node_modules
	npm run lint

.PHONY: lint-fix
lint-fix: node_modules
	npm run lint:fix

node_modules:
	npm ci
