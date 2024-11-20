"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContext = getContext;
exports.setContext = setContext;
/**
 * The global context
 *
 * It is available anywhere within the bridge as well as in
 * external and custom rules provided their definition sets
 * the `sonar-context` internal parameter.
 */
let context;
/**
 * Returns the global context
 * @returns the global context
 */
function getContext() {
    return context;
}
/**
 * Sets the global context
 * @param ctx the new global context
 */
function setContext(ctx) {
    context = { ...ctx };
}
//# sourceMappingURL=context.js.map