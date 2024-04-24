const { app, BrowserWindow } = require("electron");
const url = require("url");
const path = require("path");

function createWindow() {
  let mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.webContents.openDevTools();
  const startUrl = url.format({
    pathname: path.join(__dirname, ".app/build/index.html"),
    protocol: "file",
  });

  mainWindow.loadURL("http://localhost:3000");
}
app.whenReady().then(createWindow);
