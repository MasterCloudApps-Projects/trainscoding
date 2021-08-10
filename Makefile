# Include all variables defined in Makefile.vars
include Makefile.vars

create-env:
	@./scripts/create-env

build:
	npm run build
