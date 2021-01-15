'use strict';
const { app, BrowserWindow, shell, Menu } = require('electron')
const { ipcMain } = require('electron-better-ipc');
const {is} = require('electron-util');

const appName = app.name;

function getWindow() {
	const [win] = BrowserWindow.getAllWindows();
	return win;
}


function sendAction(action, args) {
	const win = getWindow();

	if (is.macos) {
		win.restore();
	}

	ipcMain.callRenderer(win, action, args);
}

const tpl = [
	{
		label: appName,
		submenu: [
			{
				label: `About ${appName}`,
				role: 'about'
			},
			{
				type: 'separator'
			},
			{
				label: 'Preferences...',
				accelerator: 'Cmd+,',
				click() {
					sendAction('show-preferences');
				}
			},
			{
				type: 'separator'
			},
			{
				label: 'Log Out',
				click() {
                    sendAction('log-out');
				}
			},
			{
				type: 'separator'
			},
			{
				label: 'Services',
				role: 'services',
				submenu: []
			},
			{
				type: 'separator'
			},
			{
				label: `Hide ${appName}`,
				accelerator: 'Cmd+H',
				role: 'hide'
			},
			{
				label: 'Hide Others',
				accelerator: 'Cmd+Shift+H',
				role: 'hideothers'
			},
			{
				label: 'Show All',
				role: 'unhide'
			},
			{
				type: 'separator'
			},
			{
				label: 'Quit',
				accelerator: 'Cmd+Q',
				click() {
					app.quit();
				}
			}
		]
	},
	{
		label: 'Edit',
		submenu: [
			{
				label: 'Undo',
				accelerator: 'CmdOrCtrl+Z',
				role: 'undo'
			},
			{
				label: 'Redo',
				accelerator: 'Shift+CmdOrCtrl+Z',
				role: 'redo'
			},
			{
				type: 'separator'
			},
			{
				label: 'Cut',
				accelerator: 'CmdOrCtrl+X',
				role: 'cut'
			},
			{
				label: 'Copy',
				accelerator: 'CmdOrCtrl+C',
				role: 'copy'
			},
			{
				label: 'Paste',
				accelerator: 'CmdOrCtrl+V',
				role: 'paste'
			},
			{
				label: 'Select All',
				accelerator: 'CmdOrCtrl+A',
				role: 'selectall'
			}
		]
	},
	{
		label: 'Window',
		submenu: [
			{
				label: 'Minimize',
				accelerator: 'CmdOrCtrl+M',
				role: 'minimize'
			},
			{
				label: 'Close',
				accelerator: 'CmdOrCtrl+W',
				role: 'close'
			},
			{
				type: 'separator'
			},
			{
				label: 'Bring All to Front',
				role: 'front'
			}
		]
	},
	{
		label: 'Help',
		role: 'help',
		submenu: [
			{
				label: 'Website',
				click() {
					shell.openExternal('https://github.com/eriknyk/youtb');
				}
			},
			{
				label: 'Report Issue',
				click() {
					const body = `
**Please succinctly describe your issue and steps to reproduce it.**

-

${app.getName()} ${app.getVersion()}
${process.platform} ${process.arch}`;

					shell.openExternal(`https://github.com/eriknyk/youtb/issues/new?body=${encodeURIComponent(body)}`);
				}
			}
		]
	}
];

module.exports = Menu.buildFromTemplate(tpl);
