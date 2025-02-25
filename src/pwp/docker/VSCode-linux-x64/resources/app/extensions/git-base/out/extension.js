"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
const api1_1 = require("./api/api1");
const extension_1 = require("./api/extension");
const model_1 = require("./model");
function activate(context) {
    const apiImpl = new extension_1.GitBaseExtensionImpl(new model_1.Model());
    context.subscriptions.push((0, api1_1.registerAPICommands)(apiImpl));
    return apiImpl;
}
//# sourceMappingURL=extension.js.map