export const isElectron = () => {
  return window.electron !== undefined;
};

export const isDevelopment = () => {
  return window?.electron?.isDevelopment ?? false;
}; 