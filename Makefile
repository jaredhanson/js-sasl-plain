SOURCES = *.js lib/*.js
TESTS = test/*.test.js


# ==============================================================================
# Browser Tests
# ==============================================================================

CHROME = open -a "Google Chrome"
FIREFOX = open -a "Firefox"
SAFARI = open -a "Safari"
PHANTOMJS = phantomjs

MOCHA_PHANTOMJS = ./node_modules/.bin/mocha-phantomjs
WWW_TESTS = test/www/index.html


test: test-phantomjs

test-chrome:
	$(CHROME) $(WWW_TESTS)

test-firefox:
	$(FIREFOX) $(WWW_TESTS)

test-safari:
	$(SAFARI) $(WWW_TESTS)

test-phantomjs:
	$(MOCHA_PHANTOMJS) $(WWW_TESTS)


# ==============================================================================
# Node Tests
# ==============================================================================

MOCHA = ./node_modules/.bin/mocha

test-node:
	@NODE_PATH=.. \
	$(MOCHA) \
		--require test/node/bootstrap \
		--reporter spec $(TESTS)


# ==============================================================================
# Static Analysis
# ==============================================================================

JSHINT = jshint

hint: lint
lint:
	$(JSHINT) $(SOURCES)


.PHONY: test-browser test-phantomjs
