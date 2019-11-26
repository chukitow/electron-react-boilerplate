const electron = require('electron');
const { app, BrowserWindow } = electron;
const path = require('path');
const isDev = require('electron-is-dev');
const log = require('electron-log');

let mainWindow;

function createWindow() {
  log.info('Starting app');
  mainWindow = new BrowserWindow({
    width: 900,
    height: 680,
    title: 'Electron + React Boilerplate',
    webPreferences: {
      webviewTag: true,
      webSecurity: false,
      nodeIntegration: true,
    }
  });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  log.info('Closing app');
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  log.info('Reopening app');
  if (mainWindow === null) {
    createWindow();
  }
});
