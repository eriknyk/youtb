
const electron = require('electron');
const app = electron.app;

app.on('ready', function () {
  const mainWindow = new electron.BrowserWindow({
    title: "Youtube",
    width: 1024,
    height: 768,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true,
      plugins: true,
      enableRemoteModule: true,
      webviewTag: true
    }
  });
  mainWindow.loadURL('file://' + __dirname + '/index.html', {
    userAgent: 'Chrome'
  });
  mainWindow.on('ready-to-show', function () {
    mainWindow.show();
    mainWindow.focus();
  });
});


// const {app, Menu, BrowserWindow} = require('electron');
// const {is} = require('electron-util');

// const path = require('path');
// const fs = require('fs');
// const appMenu = require('./menu');

// let mainWindow;

// function createWindow() {
//     const win = new BrowserWindow({
//         title: "Youtube",
//         show: false,
//         width: 1024,
//         height: 768,
//         //icon: is.linux ? path.join(__dirname, 'media', 'icon.png') : undefined,
//         titleBarStyle: 'hidden',
//         webPreferences:{
//             preload: path.join(__dirname, 'browser.js'),
//             //nativeWindowOpen: true,
//             //contextIsolation: true,
//             nodeIntegration: false,
//             webSecurity: true,
//             plugins: true,
//             enableRemoteModule: true
//         }
//     });
//     win.loadURL('https://youtube.com', {
//         userAgent: 'Chrome'
//     });
//     win.on('closed', function () {
//         mainWindow = null
//     })

//     return win;
// }
// app.on('ready', function () {
//     Menu.setApplicationMenu(appMenu);
//     mainWindow = createWindow();
//     //mainWindow.webContents.openDevTools();

//     const page = mainWindow.webContents;

//     page.on('dom-ready', function () {
//         page.insertCSS(fs.readFileSync(path.join(__dirname, 'browser.css'), 'utf8'));
//         mainWindow.show();

//         var injectJs = `var b = document.createElement('button');
//         b.classList.add('yt-icon-button');
//         b.style.width = '30px';
//         b.style.height = '30px';
//         b.innerHTML = '<svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope iron-icon" style="pointer-events: none; display: block; width: 24; height: 24;"><g class="style-scope iron-icon"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" class="style-scope iron-icon"></path></g></svg>'
//         b.onclick = function() { window.history.back() };
//         document.getElementById('center').prepend(b)`
        
//         mainWindow.webContents.executeJavaScript(injectJs, function (result) {
//             console.log('back button injected!')
//         });
//     });
// });
// app.on('window-all-closed', function () {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// });
// app.on('activate', function () {
//     if (mainWindow === null) {
//         mainWindow = createWindow()
//     }
// });