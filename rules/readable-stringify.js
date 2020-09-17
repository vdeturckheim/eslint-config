'use strict';
const DEFAULT_SPACING = 2;

const isStringifyCall = function (node) {

    return node.object.name === 'JSON' &&
        node.property.name === 'stringify' &&
        node.parent.type === 'CallExpression';
}


module.exports = function (context) {

    const spacingOpt = context.options.find((item) => item.spacing !== undefined);
    const indent = spacingOpt && spacingOpt.spacing || DEFAULT_SPACING;

    return {
        MemberExpression(node) {

            if (!isStringifyCall(node)) {
                return;
            }
            if (node.parent.arguments.length < 3) {
                return context.report({
                    node: node,
                    message: 'Calls to JSON.stringify must take 3 arguments. ' +
                        'Please consider calling JSON.stringify(item, null, ' + indent + ');'
                });
            }
            if (node.parent.arguments[2].value !== indent) {
                return context.report({
                    node: node,
                    message: 'Calls to JSON.stringify must use an spacing of ' + indent+ '. ' +
                        'Please consider calling JSON.stringify(item, null, ' + indent + ');'
                });
            }
        }
    };
}


