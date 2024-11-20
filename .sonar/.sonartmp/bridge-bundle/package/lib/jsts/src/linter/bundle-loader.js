"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCustomRules = loadCustomRules;
exports.loadBundles = loadBundles;
const index_1 = require("../rules/index");
const custom_rules_1 = require("./custom-rules");
const shared_1 = require("@sonar/shared");
function loadCustomRules(linter, rules = []) {
    for (const rule of rules) {
        linter.defineRule(rule.ruleId, rule.ruleModule);
    }
}
function loadBundles(linter, rulesBundles) {
    for (const bundleId of rulesBundles) {
        loaders[bundleId](linter);
    }
}
/**
 * Loaders for each of the predefined rules bundles. Each bundle comes with a
 * different data structure (array/record/object).
 */
const loaders = {
    /**
     * Loads internal rules
     *
     * Adds the rules from SonarJS plugin, i.e. rules in path
     * /src/rules
     */
    internalRules(linter) {
        linter.defineRules(index_1.rules);
    },
    /**
     * Loads global context rules
     *
     * Context bundles define a set of external custom rules (like the taint analysis rule)
     * including rule keys and rule definitions that cannot be provided to the linter
     * wrapper using the same feeding channel as rules from the active quality profile.
     */
    contextRules(linter) {
        const { bundles } = (0, shared_1.getContext)();
        const customRules = [];
        for (const ruleBundle of bundles) {
            const bundle = require(ruleBundle);
            customRules.push(...bundle.rules);
            const ruleIds = bundle.rules.map((r) => r.ruleId);
            (0, shared_1.debug)(`Loaded rules ${ruleIds} from ${ruleBundle}`);
        }
        loadCustomRules(linter, customRules);
    },
    /**
     * Loads internal custom rules
     *
     * These are rules used internally by SonarQube to have the symbol highlighting and
     * the cognitive complexity metrics.
     */
    internalCustomRules(linter) {
        loadCustomRules(linter, custom_rules_1.customRules);
    },
};
//# sourceMappingURL=bundle-loader.js.map