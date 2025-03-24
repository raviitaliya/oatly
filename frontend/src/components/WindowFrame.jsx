import { useEffect, useState } from 'react';

export function WindowFrame() {
  const [isMaximized, setIsMaximized] = useState(false);

  useEffect(() => {
    if (window.electron) {
      window.electron.onWindowStateChange((maximized) => {
        setIsMaximized(maximized);
      });
    }
  }, []);

  const handleMinimize = () => {
    window.electron?.windowControls.minimize();
  };

  const handleMaximize = () => {
    window.electron?.windowControls.maximize();
  };

  const handleQuit = () => {
    window.electron?.windowControls.quit();
  };

  // Only show custom frame in electron environment
  if (!window.electron) return null;

  return (
    <div className="h-8 bg-gray-800 flex items-center justify-between px-2 drag">
      <div className="text-white text-sm">Oatside Admin</div>
      <div className="flex space-x-2">
        <button
          onClick={handleMinimize}
          className="w-6 h-6 flex items-center justify-center hover:bg-gray-700 rounded"
        >
          <span className="text-white">─</span>
        </button>
        <button
          onClick={handleMaximize}
          className="w-6 h-6 flex items-center justify-center hover:bg-gray-700 rounded"
        >
          {isMaximized ? (
            <span className="text-white">❐</span>
          ) : (
            <span className="text-white">□</span>
          )}
        </button>
        <button
          onClick={handleQuit}
          className="w-6 h-6 flex items-center justify-center hover:bg-red-600 rounded"
        >
          <span className="text-white">✕</span>
        </button>
      </div>
    </div>
  );
}