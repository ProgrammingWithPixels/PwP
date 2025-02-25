"use strict";
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
const vscode_1 = require("vscode");
const util_1 = require("./util");
class Model {
    constructor() {
        this.remoteSourceProviders = new Set();
        this._onDidAddRemoteSourceProvider = new vscode_1.EventEmitter();
        this.onDidAddRemoteSourceProvider = this._onDidAddRemoteSourceProvider.event;
        this._onDidRemoveRemoteSourceProvider = new vscode_1.EventEmitter();
        this.onDidRemoveRemoteSourceProvider = this._onDidRemoveRemoteSourceProvider.event;
    }
    registerRemoteSourceProvider(provider) {
        this.remoteSourceProviders.add(provider);
        this._onDidAddRemoteSourceProvider.fire(provider);
        return (0, util_1.toDisposable)(() => {
            this.remoteSourceProviders.delete(provider);
            this._onDidRemoveRemoteSourceProvider.fire(provider);
        });
    }
    getRemoteProviders() {
        return [...this.remoteSourceProviders.values()];
    }
}
exports.Model = Model;
//# sourceMappingURL=model.js.map