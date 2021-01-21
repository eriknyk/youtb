const {app, Menu, BrowserWindow} = require('electron');
const {is} = require('electron-util');

const path = require('path');
const fs = require('fs');
const appMenu = require('./menu');

let mainWindow;

function createWindow() {
    const win = new BrowserWindow({
        title: "Youtube",
        show: false,
        width: 1024,
        height: 768,
        icon: is.linux ? path.join(__dirname, 'media', 'icon.png') : undefined,
        titleBarStyle: 'hidden',
        webPreferences:{
            preload: path.join(__dirname, 'browser.js'),
            //nativeWindowOpen: true,
            //contextIsolation: true,
            nodeIntegration: false,
            webSecurity: true,
            plugins: true,
            enableRemoteModule: true
        }
    });
    win.loadURL('https://youtube.com', {
        userAgent: 'Chrome'
    });
    win.on('closed', function () {
        mainWindow = null
    })

    return win;
}
app.on('ready', function () {
    Menu.setApplicationMenu(appMenu);
    mainWindow = createWindow();
    //mainWindow.webContents.openDevTools();

    const page = mainWindow.webContents;

    page.on('dom-ready', function () {
        page.insertCSS(fs.readFileSync(path.join(__dirname, 'browser.css'), 'utf8'));
        mainWindow.show();
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});
app.on('activate', function () {
    if (mainWindow === null) {
        mainWindow = createWindow()
    }
});