'use strict';
const rule = require('../rules/readable-stringify');
const RuleTester = require("eslint").RuleTester;

const ruleTester = new RuleTester();

ruleTester.run('readable-stringify', rule, {
    valid: [
        {
            code: 'JSON.stringify(item, null, 2);',
            options: [{ spacing: 2 }]
        },
        {
            code: 'foo(10);'
        }
    ],
    invalid: [
        {
            code: 'JSON.stringify({});',
            errors: [{ message: 'Calls to JSON.stringify must take 3 arguments. ' +
                    'Please consider calling JSON.stringify(item, null, 2);' }]
        },
        {
            code: 'JSON.stringify({}, null, 3);',
            errors: [{ message: 'Calls to JSON.stringify must use an spacing of 2. ' +
                    'Please consider calling JSON.stringify(item, null, 2);' }]
        }
    ]
});

