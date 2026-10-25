import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../../module/apps.js', import.meta.url), 'utf8');
const editor = { innerText: '' };
const selection = {
    0: editor,
    addClass() { return this; }, removeClass() { return this; },
    html() { return this; }, hide() { return this; }, show() { return this; },
    on() { return this; }, text(value) { return value === undefined ? '' : this; },
    css() { return this; }
};
const context = vm.createContext({
    window: {}, document: { addEventListener() {} }, structuredClone, taskmgrTasks: [],
    $: () => selection, createWebapp: () => ({}), createHistoryStack: () => ({}),
    setTimeout: fn => fn(), requestAnimationFrame: fn => fn(), console
});
vm.runInContext(source + '\nthis.testApps = apps;', context);
const app = context.testApps.notepad;

// Opening a supplied file, including an empty file, must take priority over the welcome note.
app._pendingContent = 'Existing user document';
app.init();
assert.equal(editor.innerText, 'Existing user document');
app._pendingContent = '';
app.init();
assert.equal(editor.innerText, '');
app.init();
assert.match(editor.innerText, /https:\/\/vectorindex\.cloud/);
app.init();
assert.equal(editor.innerText, '', 'Only the first blank launch receives the welcome note');

let written;
editor.innerText = 'My own edits';
app._mountedFileHandle = { createWritable: async () => ({
    write: async value => { written = value; }, close: async () => {}
}) };
await app.saveMounted();
assert.equal(written, 'My own edits', 'Saving a mounted file uses the current user content');

const explorer = context.testApps.explorer;
explorer._gotoSync = path => path;
assert.equal(explorer.goto('C:/用户/Administrator/文档'), 'C:/用户/Sean/文档');
assert.equal(explorer.goto('C:/用户/Sean/图片'), 'C:/用户/Sean/图片');
console.log('✓ Personal defaults preserve supplied documents, user saves and legacy home shortcuts');
