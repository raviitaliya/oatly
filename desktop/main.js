const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    // Show loading state
    show: false
  });

  // Load the app
  const startUrl = 'http://localhost:5173';
  
  mainWindow.loadURL(startUrl)
    .then(() => {
      console.log('URL loaded successfully');
      mainWindow.show();
    })
    .catch((err) => {
      console.error('Failed to load URL:', err);
      // Try loading a local HTML file as fallback
      mainWindow.loadFile(path.join(__dirname, 'loading.html'));
    });

  // Open DevTools for debugging
  mainWindow.webContents.openDevTools();

  // Log any errors
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.error('Failed to load:', errorCode, errorDescription);
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  console.log('App is ready, creating window...');
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

// Handle any uncaught errors
process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error);
});
