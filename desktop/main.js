const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev"); // Add this dependency

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false, // Better security: set to false
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
    frame: false,
    titleBarStyle: "hidden",
    icon: path.join(__dirname, "public", "logo.png"),
    backgroundColor: "#ffffff",
  });

  // Determine which URL to load based on environment
  const startUrl = isDev
    ? "http://localhost:5173" // Development
    : `file://${path.join(__dirname, "dist", "index.html")}`; // Production (assumes Vite build output)

  // Load the appropriate URL with better error handling
  mainWindow
    .loadURL(startUrl)
    .catch((err) => {
      console.error("Failed to load primary URL:", err);
      // Fallback to a local error page
      const fallbackPath = path.join(__dirname, "public", "error.html");
      mainWindow
        .loadFile(fallbackPath)
        .catch((fallbackErr) => {
          console.error("Failed to load fallback page:", fallbackErr);
        });
    })
    .finally(() => {
      mainWindow.show();
    });

  // Only open DevTools in development
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.webContents.on("did-fail-load", (event, errorCode, errorDescription) => {
    console.error("Failed to load:", errorCode, errorDescription);
  });

  // Handle window events
  mainWindow.on("maximize", () => {
    mainWindow.webContents.send("window-maximized");
  });
  mainWindow.on("unmaximize", () => {
    mainWindow.webContents.send("window-unmaximized");
  });
}

app.whenReady().then(() => {
  console.log("App is ready, creating window...");
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// IPC handlers
ipcMain.on("app-maximize", (event) => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) {
    window.isMaximized() ? window.unmaximize() : window.maximize();
  }
});

ipcMain.on("app-minimize", () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) window.minimize();
});

ipcMain.on("app-quit", () => {
  app.quit();
});

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});