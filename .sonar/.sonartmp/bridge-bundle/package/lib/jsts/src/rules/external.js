"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
/*
 * SonarQube JavaScript Plugin
 * Copyright (C) 2011-2024 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
const core_1 = require("./core");
const eslint_plugin_react_1 = require("eslint-plugin-react");
const typescript_eslint_1 = require("./typescript-eslint");
const eslint_plugin_jsx_a11y_1 = require("eslint-plugin-jsx-a11y");
const eslint_plugin_import_1 = require("eslint-plugin-import");
exports.rules = {
    S103: core_1.eslintRules['max-len'],
    S106: core_1.eslintRules['no-console'],
    S108: core_1.eslintRules['no-empty'],
    S1090: eslint_plugin_jsx_a11y_1.rules['iframe-has-title'],
    S1117: typescript_eslint_1.tsEslintRules['no-shadow'],
    S113: core_1.eslintRules['eol-last'],
    S1131: core_1.eslintRules['no-trailing-spaces'],
    S1143: core_1.eslintRules['no-unsafe-finally'],
    S1199: core_1.eslintRules['no-lone-blocks'],
    S121: core_1.eslintRules['curly'],
    S122: core_1.eslintRules['max-statements-per-line'],
    S1314: core_1.eslintRules['no-octal'],
    S1321: core_1.eslintRules['no-with'],
    S139: core_1.eslintRules['line-comment-position'],
    S1440: core_1.eslintRules['eqeqeq'],
    S1441: core_1.eslintRules['quotes'],
    S1442: core_1.eslintRules['no-alert'],
    S1516: core_1.eslintRules['no-multi-str'],
    S1525: core_1.eslintRules['no-debugger'],
    S1536: core_1.eslintRules['no-dupe-args'],
    S1537: typescript_eslint_1.tsEslintRules['comma-dangle'],
    S1539: core_1.eslintRules['strict'],
    S1656: core_1.eslintRules['no-self-assign'],
    S1774: core_1.eslintRules['no-ternary'],
    S2094: typescript_eslint_1.tsEslintRules['no-extraneous-class'],
    S2427: core_1.eslintRules['radix'],
    S2432: core_1.eslintRules['no-setter-return'],
    S2685: core_1.eslintRules['no-caller'],
    S2933: typescript_eslint_1.tsEslintRules['prefer-readonly'],
    S2966: typescript_eslint_1.tsEslintRules['no-non-null-assertion'],
    S3257: typescript_eslint_1.tsEslintRules['no-inferrable-types'],
    S3353: core_1.eslintRules['prefer-const'],
    S3523: core_1.eslintRules['no-new-func'],
    S3786: core_1.eslintRules['no-template-curly-in-string'],
    S3799: core_1.eslintRules['no-empty-pattern'],
    S3812: core_1.eslintRules['no-unsafe-negation'],
    S3834: core_1.eslintRules['no-new-native-nonconstructor'],
    S3863: eslint_plugin_import_1.rules['no-duplicates'],
    S4124: typescript_eslint_1.tsEslintRules['no-misused-new'],
    S4125: core_1.eslintRules['valid-typeof'],
    S4136: typescript_eslint_1.tsEslintRules['adjacent-overload-signatures'],
    S4137: typescript_eslint_1.tsEslintRules['consistent-type-assertions'],
    S4140: core_1.eslintRules['no-sparse-arrays'],
    S4157: typescript_eslint_1.tsEslintRules['no-unnecessary-type-arguments'],
    S4204: typescript_eslint_1.tsEslintRules['no-explicit-any'],
    S4325: typescript_eslint_1.tsEslintRules['no-unnecessary-type-assertion'],
    S4326: core_1.eslintRules['no-return-await'],
    S6325: core_1.eslintRules['prefer-regex-literals'],
    S6435: eslint_plugin_react_1.rules['require-render-return'],
    S6438: eslint_plugin_react_1.rules['jsx-no-comment-textnodes'],
    S6480: eslint_plugin_react_1.rules['jsx-no-bind'],
    S6509: core_1.eslintRules['no-extra-boolean-cast'],
    S6522: core_1.eslintRules['no-import-assign'],
    S6523: core_1.eslintRules['no-unsafe-optional-chaining'],
    S6534: core_1.eslintRules['no-loss-of-precision'],
    S6550: typescript_eslint_1.tsEslintRules['prefer-literal-enum-member'],
    S6565: typescript_eslint_1.tsEslintRules['prefer-return-this-type'],
    S6568: typescript_eslint_1.tsEslintRules['no-confusing-non-null-assertion'],
    S6569: typescript_eslint_1.tsEslintRules['no-unnecessary-type-constraint'],
    S6578: typescript_eslint_1.tsEslintRules['no-duplicate-enum-values'],
    S6583: typescript_eslint_1.tsEslintRules['no-mixed-enums'],
    S6590: typescript_eslint_1.tsEslintRules['prefer-as-const'],
    S6635: core_1.eslintRules['no-constructor-return'],
    S6637: core_1.eslintRules['no-extra-bind'],
    S6638: core_1.eslintRules['no-constant-binary-expression'],
    S6644: core_1.eslintRules['no-unneeded-ternary'],
    S6645: core_1.eslintRules['no-undef-init'],
    S6650: core_1.eslintRules['no-useless-rename'],
    S6653: core_1.eslintRules['prefer-object-has-own'],
    S6654: core_1.eslintRules['no-proto'],
    S6657: core_1.eslintRules['no-octal-escape'],
    S6671: typescript_eslint_1.tsEslintRules['prefer-promise-reject-errors'],
    S6746: eslint_plugin_react_1.rules['no-direct-mutation-state'],
    S6748: eslint_plugin_react_1.rules['no-children-prop'],
    S6750: eslint_plugin_react_1.rules['no-render-return-value'],
    S6756: eslint_plugin_react_1.rules['no-access-state-in-setstate'],
    S6757: eslint_plugin_react_1.rules['no-this-in-sfc'],
    S6761: eslint_plugin_react_1.rules['no-danger-with-children'],
    S6763: eslint_plugin_react_1.rules['no-redundant-should-component-update'],
    S6766: eslint_plugin_react_1.rules['no-unescaped-entities'],
    S6767: eslint_plugin_react_1.rules['no-unused-prop-types'],
    S6770: eslint_plugin_react_1.rules['jsx-pascal-case'],
    S6772: eslint_plugin_react_1.rules['jsx-child-element-spacing'],
    S6774: eslint_plugin_react_1.rules['prop-types'],
    S6775: eslint_plugin_react_1.rules['default-props-match-prop-types'],
    S6789: eslint_plugin_react_1.rules['no-is-mounted'],
    S6790: eslint_plugin_react_1.rules['no-string-refs'],
    S6793: eslint_plugin_jsx_a11y_1.rules['aria-proptypes'],
    S6807: eslint_plugin_jsx_a11y_1.rules['role-has-required-aria-props'],
    S6811: eslint_plugin_jsx_a11y_1.rules['role-supports-aria-props'],
    S6819: eslint_plugin_jsx_a11y_1.rules['prefer-tag-over-role'],
    S6821: eslint_plugin_jsx_a11y_1.rules['aria-role'],
    S6822: eslint_plugin_jsx_a11y_1.rules['no-redundant-roles'],
    S6823: eslint_plugin_jsx_a11y_1.rules['aria-activedescendant-has-tabindex'],
    S6824: eslint_plugin_jsx_a11y_1.rules['aria-unsupported-elements'],
    S6825: eslint_plugin_jsx_a11y_1.rules['no-aria-hidden-on-focusable'],
    S6836: core_1.eslintRules['no-case-declarations'],
    S6840: eslint_plugin_jsx_a11y_1.rules['autocomplete-valid'],
    S6841: eslint_plugin_jsx_a11y_1.rules['tabindex-no-positive'],
    S6842: eslint_plugin_jsx_a11y_1.rules['no-noninteractive-element-to-interactive-role'],
    S6843: eslint_plugin_jsx_a11y_1.rules['no-interactive-element-to-noninteractive-role'],
    S6845: eslint_plugin_jsx_a11y_1.rules['no-noninteractive-tabindex'],
    S6846: eslint_plugin_jsx_a11y_1.rules['no-access-key'],
    S6847: eslint_plugin_jsx_a11y_1.rules['no-noninteractive-element-interactions'],
    S6848: eslint_plugin_jsx_a11y_1.rules['no-static-element-interactions'],
    S6850: eslint_plugin_jsx_a11y_1.rules['heading-has-content'],
    S6851: eslint_plugin_jsx_a11y_1.rules['img-redundant-alt'],
    S6852: eslint_plugin_jsx_a11y_1.rules['interactive-supports-focus'],
    S6859: eslint_plugin_import_1.rules['no-absolute-path'],
    S6861: eslint_plugin_import_1.rules['no-mutable-exports'],
    S878: core_1.eslintRules['no-sequences'],
    S909: core_1.eslintRules['no-continue'],
};
//# sourceMappingURL=external.js.map