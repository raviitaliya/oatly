const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

// Add this before creating the window
app.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the app
  if (isDev) {
    console.log('Loading development server...');
    mainWindow.loadURL('http://localhost:5173');
    mainWindow.webContents.openDevTools();
  } else {
    console.log('Loading production build...');
    mainWindow.loadFile(path.join(__dirname, '../frontend/dist/index.html'));
  }

  // Handle window state
  mainWindow.on('maximize', () => {
    mainWindow.webContents.send('window-maximized');
  });

  mainWindow.on('unmaximize', () => {
    mainWindow.webContents.send('window-unmaximized');
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

// Handle IPC messages
ipcMain.on('app-maximize', (event) => {
  const window = BrowserWindow.getFocusedWindow();
  if (window.isMaximized()) {
    window.unmaximize();
  } else {
    window.maximize();
  }
});

ipcMain.on('app-minimize', () => {
  BrowserWindow.getFocusedWindow().minimize();
});

ipcMain.on('app-quit', () => {
  app.quit();
});
