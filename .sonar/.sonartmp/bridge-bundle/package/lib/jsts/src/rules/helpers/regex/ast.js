"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRegExpConstructor = isRegExpConstructor;
exports.isStringReplaceCall = isStringReplaceCall;
exports.isStringRegexMethodCall = isStringRegexMethodCall;
const __1 = require("../");
function isRegExpConstructor(node) {
    return (((node.type === 'CallExpression' || node.type === 'NewExpression') &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'RegExp' &&
        node.arguments.length > 0) ||
        isRegExpWithGlobalThis(node));
}
function isStringReplaceCall(call, services) {
    return (call.callee.type === 'MemberExpression' &&
        call.callee.property.type === 'Identifier' &&
        !call.callee.computed &&
        ['replace', 'replaceAll'].includes(call.callee.property.name) &&
        call.arguments.length > 1 &&
        (0, __1.isString)(call.callee.object, services));
}
function isStringRegexMethodCall(call, services) {
    return (call.callee.type === 'MemberExpression' &&
        call.callee.property.type === 'Identifier' &&
        !call.callee.computed &&
        ['match', 'matchAll', 'search'].includes(call.callee.property.name) &&
        call.arguments.length > 0 &&
        (0, __1.isString)(call.callee.object, services) &&
        (0, __1.isString)(call.arguments[0], services));
}
function isRegExpWithGlobalThis(node) {
    return (node.type === 'NewExpression' &&
        node.callee.type === 'MemberExpression' &&
        (0, __1.isIdentifier)(node.callee.object, 'globalThis') &&
        (0, __1.isIdentifier)(node.callee.property, 'RegExp') &&
        node.arguments.length > 0);
}
//# sourceMappingURL=ast.js.map