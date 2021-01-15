
const ipc = require('electron-better-ipc').ipcRenderer;

ipc.answerMain('log-out', () => {
    alert('ok')
	document.location.href = 'https://www.youtube.com/logout';
});