/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

exports.createWatcher = require('bindings')('vscode-policy-watcher');

if (require.main === module) {
  exports.createWatcher(
    'CodeOSS',
    {
      UpdateMode: { type: 'string' },
      SCMInputFontSize: { type: 'number' },
    },
    msg => console.log(msg)
  );
}
