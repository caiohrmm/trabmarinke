"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRuleSchema = getRuleSchema;
const shared_1 = require("@sonar/shared");
/**
 * Extracts the schema of a rule
 * @param ruleModule the rule definition
 * @param ruleId the rule id
 * @returns the extracted rule schema, if any
 */
function getRuleSchema(ruleModule, ruleId) {
    if (!ruleModule) {
        (0, shared_1.debug)(`ruleModule not found for rule ${ruleId}`);
        return undefined;
    }
    if (!ruleModule.meta?.schema) {
        return undefined;
    }
    return ruleModule.meta.schema;
}
//# sourceMappingURL=schema.js.map