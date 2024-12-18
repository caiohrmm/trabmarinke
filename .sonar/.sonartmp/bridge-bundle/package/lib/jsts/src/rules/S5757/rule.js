"use strict";
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
// https://sonarsource.github.io/rspec/#/rspec/S5757/javascript
Object.defineProperty(exports, "__esModule", { value: true });
exports.rule = void 0;
const helpers_1 = require("../helpers");
const meta_1 = require("./meta");
const MESSAGE = 'Make sure confidential information is not logged here.';
exports.rule = {
    meta: (0, helpers_1.generateMeta)(meta_1.meta, undefined, true),
    create(context) {
        return {
            NewExpression: (node) => {
                const newExpression = node;
                const { callee } = newExpression;
                if ((0, helpers_1.getFullyQualifiedName)(context, callee) !== 'signale.Signale') {
                    return;
                }
                if (newExpression.arguments.length === 0) {
                    (0, helpers_1.report)(context, { node: callee, message: MESSAGE });
                    return;
                }
                const firstArgument = (0, helpers_1.getValueOfExpression)(context, newExpression.arguments[0], 'ObjectExpression');
                if (!firstArgument) {
                    // Argument exists but its value is unknown
                    return;
                }
                const secrets = (0, helpers_1.getProperty)(firstArgument, 'secrets', context);
                if (secrets &&
                    secrets.value.type === 'ArrayExpression' &&
                    secrets.value.elements.length === 0) {
                    (0, helpers_1.report)(context, {
                        node: callee,
                        message: MESSAGE,
                    }, [(0, helpers_1.toSecondaryLocation)(secrets)]);
                }
                else if (!secrets) {
                    (0, helpers_1.report)(context, {
                        node: callee,
                        message: MESSAGE,
                    }, [(0, helpers_1.toSecondaryLocation)(firstArgument)]);
                }
            },
        };
    },
};
//# sourceMappingURL=rule.js.map