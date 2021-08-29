# Include all variables defined in Makefile.vars
include Makefile.vars

create-env:
	@./scripts/create-env

build:
	npm run build

# Spin up development environment
.PHONY: up
up:
	$(MAIN_DOCKER_COMPOSE) up --abort-on-container-exit


.PHONY: test
test:
	$(TEST_DOCKER_COMPOSE) up --abort-on-container-exit