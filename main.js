// Modules to control application life and create native browser window
const {app, BrowserWindow, Menu, dialog, ipcMain} = require('electron')
const path = require('path')
// const {ipcMain} = require("electron")
const fs = require('fs')

function createWindow () {
  // Create the browser window.

  
  const mainWindow = new BrowserWindow({
    width: 1350,
    height: 762,
    transparent: false,
    fullscreen: false,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: true,
      preload: `${__dirname}/preload.js`,
      
    }
  })

  // and load the index.html of the app.
//   mainWindow.loadFile('index.html')
    mainWindow.loadURL("http://localhost:3000")

    // const template = [
    //   {
    //     label:'Inserir Arquivo',
    //     click() {
            

    //         ipcMain.on("file-channel", "COMANDO")

    //         // ipcMain.on('asynchronous-message', (event, arg) => {
    //         //   console.log(arg) // prints "ping"
    //         //   event.reply('asynchronous-reply', 'pong')
    //         // })
            
    //     }
    //   }
    // ];
    // const menu = Menu.buildFromTemplate(template)
    // Menu.setApplicationMenu(menu)

    mainWindow.webContents.openDevTools();
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // const openFile = () => {
  //   const files = dialog.showOpenDialog(mainWindow, {
  //     properties: ['openFile'],
  //     filters: [{
  //       name: "Any File", extensions: ['txt']
  //     }]
  //   })
  //   if(!files) return;
  //   const file = files[0]
  //   const fileContent = fs.readFileSync(file);
  //   console.log(fileContent);
  
  // }

  ipcMain.on('open-file', (e)=>{
  
    dialog.showOpenDialog(mainWindow, {
      properties: ['openFile'],
      filters: [{
        name: "Any File", extensions: ['txt']
      }]
    }).then(data=>{
      var path = data.filePaths[0]
      path = path.replace(/\\/g, "/")
      var text = fs.readFileSync(path);
      var string = text.toString('utf-8') // converting the Buffer into String
      var textByLine = string.split("\n")

      e.sender.send('file-recieve', textByLine)})
    // if(!files) return;
    // e.sender.send('file-recieve', files)
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})



// ipcMain.on('openFile', (event, arg)=>{
//   const {dialog} = require('electron')
//   const fs = require('fs')

//   ipcMain.on('click-button', (event, arg)=>{
//     if(arg =='true')
//     dialog.showOpenDialog(function(fileNames){
//       if(fileNames == undefined)
//       {
//         console.log("no file selected");
//       }
//       else{
//         read_file(fileNames[0])
//       }
//     })
//   })
//   function read_file(filepath)
//   {
//     fs.readFile(filepath, 'utf-8', (err, data)=>{
//       if(err)
//       {
//         alert('An error'+err.message)
//         return
//       }
//       event.sender.send('fileData', data)
//     })
//   }
// })

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.