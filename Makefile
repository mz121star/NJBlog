TESTS = $(shell find test -type f -name "*.js")
TESTTIMEOUT = 5000
REPORTER = spec
JSCOVERAGE = ./node_modules/jscover/bin/jscover

install:
	@npm install

test: install
	./node_modules/.bin/mocha \
         --reporter list

cov: install
	@rm -rf .cov
	@$(JSCOVERAGE) --exclude=public --exclude=test . .cov
	@cp -rf node_modules test public .cov

test-cov: cov
	@$(MAKE) -C .cov test REPORTER=progress
	@$(MAKE) -C .cov test REPORTER=html-cov > coverage.html

.PHONY: test  test-cov cov
