/**
 * This runs ESLint against our test file
 * Alternativelly, one can run the CLI directly using
 * $ ../node_modules/.bin/eslint --rulesdir ../rules example.js
 */
'use strict';
const Assert = require('assert');
const Path = require('path');
const CLIEngine = require("eslint").CLIEngine;

// creates an ESLint CLI instance
const cli = new CLIEngine({
    useEslintrc: true,
    rulePaths: [Path.join(__dirname, '..', 'rules')] // Provide our custom rules
});

// Run the CLI on example.js
const report = cli.executeOnFiles([Path.join(__dirname, 'example.js')]);

const JSONResult = report.results[0].messages.find((item) => item.ruleId === 'readable-stringify');
Assert.ok(JSONResult, 'Could not find a result for rule readable-stringify');
Assert.deepStrictEqual(JSONResult.message,
    'Calls to JSON.stringify must take 3 arguments. Please consider calling JSON.stringify(item, null, 2);');


