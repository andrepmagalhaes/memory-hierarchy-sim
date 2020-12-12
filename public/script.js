// var a = document.querySelector(".reset");
// a.onClick(function () {
//     alert('allo');
// });

// const { dialog } = require('electron')
// console.log(dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] }))

// module.exports = {
//     test(){
//         alert('kekw');
//     },
//     open_file(){
//         dialog.showOpenDialog({title: 'Dialog'}, (filepath)=>{
//             console.log('Filepath: ', filepath)
//         })
//     }
    
// }

// let remote = require('electron').remote
// let dialog = remote.dialog

// document.querySelector('.show-open-dialog').addEventListener((a)=>
// {
    
// })

const electron = window.require('electron')
const dialog = electron.remote.dialog

let a;

module.exports = {
    open_file(){
        dialog.showOpenDialog({title:"allo"}).then(data=>alert(data.filePaths[0]))
    },
    test(){
        alert(a)
    }
}
