const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  windowControls: {
    minimize: () => ipcRenderer.send('app-minimize'),
    maximize: () => ipcRenderer.send('app-maximize'),
    close: () => ipcRenderer.send('app-quit')
  },
  onWindowStateChange: (callback) => {
    ipcRenderer.on('window-maximized', () => callback(true));
    ipcRenderer.on('window-unmaximized', () => callback(false));
    return () => {
      ipcRenderer.removeAllListeners('window-maximized');
      ipcRenderer.removeAllListeners('window-unmaximized');
    };
  }
});