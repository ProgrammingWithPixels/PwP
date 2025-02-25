"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitBaseExtensionImpl = void 0;
const vscode_1 = require("vscode");
const api1_1 = require("./api1");
class GitBaseExtensionImpl {
    set model(model) {
        this._model = model;
        const enabled = !!model;
        if (this.enabled === enabled) {
            return;
        }
        this.enabled = enabled;
        this._onDidChangeEnablement.fire(this.enabled);
    }
    get model() {
        return this._model;
    }
    constructor(model) {
        this.enabled = false;
        this._onDidChangeEnablement = new vscode_1.EventEmitter();
        this.onDidChangeEnablement = this._onDidChangeEnablement.event;
        this._model = undefined;
        if (model) {
            this.enabled = true;
            this._model = model;
        }
    }
    getAPI(version) {
        if (!this._model) {
            throw new Error('Git model not found');
        }
        if (version !== 1) {
            throw new Error(`No API version ${version} found.`);
        }
        return new api1_1.ApiImpl(this._model);
    }
}
exports.GitBaseExtensionImpl = GitBaseExtensionImpl;
//# sourceMappingURL=extension.js.map