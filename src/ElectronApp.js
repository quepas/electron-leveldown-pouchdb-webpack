const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 600,
    height: 300,
    "min-width": 500,
    "min-height": 200,
    "accept-first-mouse": true,
    "title-bar-style": "hidden"
  });
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "../src/index.html"),
      protocol: "file:",
      slashes: true
    })
  );
  win.webContents.openDevTools();
  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});
