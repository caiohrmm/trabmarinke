"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.visit = visit;
const helpers_1 = require("../../rules/helpers");
/**
 * Visits the abstract syntax tree of an ESLint source code
 * @param sourceCode the source code to visit
 * @param callback a callback function invoked at each node visit
 */
function visit(sourceCode, callback) {
    const stack = [sourceCode.ast];
    while (stack.length) {
        const node = stack.pop();
        callback(node);
        stack.push(...(0, helpers_1.childrenOf)(node, sourceCode.visitorKeys).reverse());
    }
}
//# sourceMappingURL=visitor.js.map