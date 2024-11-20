"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractTokensAndComments = extractTokensAndComments;
/**
 * Extracts comments and tokens from an ESLint source code
 *
 * The returned extracted comments includes also those from
 * the template section of a Vue.js Single File Component.
 *
 * @param sourceCode the source code to extract from
 * @returns the extracted tokens and comments
 */
function extractTokensAndComments(sourceCode) {
    const ast = sourceCode.ast;
    const tokens = [...(ast.tokens ?? [])];
    const comments = [...(ast.comments ?? [])];
    if (ast.templateBody) {
        const { templateBody } = ast;
        tokens.push(...templateBody.tokens);
        comments.push(...templateBody.comments);
    }
    return { tokens, comments };
}
//# sourceMappingURL=tokens.js.map