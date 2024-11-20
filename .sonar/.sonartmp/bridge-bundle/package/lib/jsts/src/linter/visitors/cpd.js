"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCpdTokens = getCpdTokens;
const visitor_1 = require("./visitor");
/**
 * Extracts the copy-paste detector (cpd) tokens
 * @param sourceCode the source code to extract from
 * @returns the cpd tokens
 */
function getCpdTokens(sourceCode) {
    const cpdTokens = [];
    const tokens = sourceCode.ast.tokens;
    const { jsxTokens, importTokens, requireTokens } = extractTokens(sourceCode);
    tokens.forEach(token => {
        let text = token.value;
        if (text.trim().length === 0) {
            // for EndOfFileToken and JsxText tokens containing only whitespaces
            return;
        }
        if (importTokens.includes(token)) {
            // for tokens from import statements
            return;
        }
        if (requireTokens.includes(token)) {
            // for tokens from require statements
            return;
        }
        if (isStringLiteralToken(token) && !jsxTokens.includes(token)) {
            text = 'LITERAL';
        }
        const startPosition = token.loc.start;
        const endPosition = token.loc.end;
        cpdTokens.push({
            location: {
                startLine: startPosition.line,
                startCol: startPosition.column,
                endLine: endPosition.line,
                endCol: endPosition.column,
            },
            image: text,
        });
    });
    return { cpdTokens };
}
/**
 * Extracts specific tokens to be ignored by copy-paste detection
 * @param sourceCode the source code to extract from
 * @returns a list of tokens to be ignored
 */
function extractTokens(sourceCode) {
    const jsxTokens = [];
    const importTokens = [];
    const requireTokens = [];
    (0, visitor_1.visit)(sourceCode, (node) => {
        const tsNode = node;
        switch (tsNode.type) {
            case 'JSXAttribute':
                if (tsNode.value?.type === 'Literal') {
                    jsxTokens.push(...sourceCode.getTokens(tsNode.value));
                }
                break;
            case 'ImportDeclaration':
                importTokens.push(...sourceCode.getTokens(tsNode));
                break;
            case 'VariableDeclaration': {
                if (tsNode.declarations.length === 1) {
                    const declaration = tsNode.declarations[0];
                    // `const x = require('y')`
                    if (isRequireCall(declaration.init)) {
                        requireTokens.push(...sourceCode.getTokens(node));
                        break;
                    }
                    // `const x = require('y')()`
                    if (declaration.init?.type === 'CallExpression' &&
                        isRequireCall(declaration.init.callee)) {
                        requireTokens.push(...sourceCode.getTokens(node));
                        break;
                    }
                    // `const x = require('y').z`
                    if (declaration.init?.type === 'MemberExpression' &&
                        isRequireCall(declaration.init.object)) {
                        requireTokens.push(...sourceCode.getTokens(node));
                        break;
                    }
                    // `const x = require('y').z()`
                    if (declaration.init?.type === 'CallExpression' &&
                        declaration.init.callee.type === 'MemberExpression' &&
                        isRequireCall(declaration.init.callee.object)) {
                        requireTokens.push(...sourceCode.getTokens(node));
                        break;
                    }
                }
                break;
            }
        }
    });
    return { jsxTokens, importTokens, requireTokens };
}
function isStringLiteralToken(token) {
    return token.value.startsWith('"') || token.value.startsWith("'") || token.value.startsWith('`');
}
function isRequireCall(node) {
    return (node?.type === 'CallExpression' &&
        node.callee.type === 'Identifier' &&
        node.callee.name === 'require');
}
//# sourceMappingURL=cpd.js.map