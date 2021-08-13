# Include all variables defined in Makefile.vars
include Makefile.vars

create-env:
	@./scripts/create-env

build:
	npm run build

# Spin up development environment
.PHONY: up
up:
	$(DOCKER_COMPOSE) up --abort-on-container-exit
