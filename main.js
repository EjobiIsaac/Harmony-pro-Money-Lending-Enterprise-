const { app, BrowserWindow } = require('electron');
function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: 'HARMONY MICROFINANCE PRO v8',
    autoHideMenuBar: true,
    icon: 'icon.png'
  });
  win.loadFile('index.html');
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
