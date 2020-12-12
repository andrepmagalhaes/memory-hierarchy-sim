// "use strict";
// exports.__esModule = true;
// exports.electron = void 0;
// // var fileReader_1 = require("./fileReader");
// exports.electron = window.require('electron');
const utilities = require('../utilities')
const { ipcRenderer } = window.require('electron');
const cachel1 = require("./cachel1")
const proc = require("./processador")
const cachel2 = require("./cachel2");
const { link } = require('fs');


// 1 == sucesso
// 0 == nao encontrado


let is_file_loaded = false;
let aux
let radio_status
let tabela_paginas
let tlb
let falhas
let l2
let l1
let processador
let buffer_l1_l2
let buffer_l2_mp
let main_mem

document.addEventListener("DOMContentLoaded", ()=>{
    radio_status = {
        wt: document.getElementById("wt"),
        wb: document.getElementById("wb")
    }
    
    main_mem = document.querySelectorAll(".mem")
    
    tabela_paginas = {
        endereco: document.querySelectorAll(".tp_endereco"),
        referencia: document.querySelectorAll(".tp_referencia"),
        modificacao: document.querySelectorAll(".tp_modificacao"),
        validade: document.querySelectorAll(".tp_validade")
    }
    
    tlb = {
        endereco: document.querySelectorAll(".tlb_endereco"),
        tag: document.querySelectorAll(".tlb_tag"),
        referencia: document.querySelectorAll(".tlb_referencia"),
        modificacao: document.querySelectorAll(".tlb_modificacao"),
        validade: document.querySelectorAll(".tlb_validade")
    }
    
    falhas = {
        tlb: document.querySelector(".num_faults_tlb"),
        l1: document.querySelector(".num_faults_l1"),
        l2: document.querySelector(".num_faults_l2")
    }
    
    l2 = {
        via0:{
            validade: document.querySelectorAll(".l2_via0 .l2_v"),
            lru: document.querySelectorAll(".l2_via0 .l2_lru"),
            escrita: document.querySelectorAll(".l2_via0 .l2_e"),
            tag: document.querySelectorAll(".l2_via0 .l2_tg"),
            w0: document.querySelectorAll(".l2_via0 .l2_w0"),
            w1: document.querySelectorAll(".l2_via0 .l2_w1"),
            w2: document.querySelectorAll(".l2_via0 .l2_w2"),
            w3: document.querySelectorAll(".l2_via0 .l2_w3"),
        },
        via1:{
            validade: document.querySelectorAll(".l2_via1 .l2_v"),
            lru: document.querySelectorAll(".l2_via1 .l2_lru"),
            escrita: document.querySelectorAll(".l2_via1 .l2_e"),
            tag: document.querySelectorAll(".l2_via1 .l2_tg"),
            w0: document.querySelectorAll(".l2_via1 .l2_w0"),
            w1: document.querySelectorAll(".l2_via1 .l2_w1"),
            w2: document.querySelectorAll(".l2_via1 .l2_w2"),
            w3: document.querySelectorAll(".l2_via1 .l2_w3"),
        },
        via2:{
            validade: document.querySelectorAll(".l2_via2 .l2_v"),
            lru: document.querySelectorAll(".l2_via2 .l2_lru"),
            escrita: document.querySelectorAll(".l2_via2 .l2_e"),
            tag: document.querySelectorAll(".l2_via2 .l2_tg"),
            w0: document.querySelectorAll(".l2_via2 .l2_w0"),
            w1: document.querySelectorAll(".l2_via2 .l2_w1"),
            w2: document.querySelectorAll(".l2_via2 .l2_w2"),
            w3: document.querySelectorAll(".l2_via2 .l2_w3"),
        },
        via3:{
            validade: document.querySelectorAll(".l2_via3 .l2_v"),
            lru: document.querySelectorAll(".l2_via3 .l2_lru"),
            escrita: document.querySelectorAll(".l2_via3 .l2_e"),
            tag: document.querySelectorAll(".l2_via3 .l2_tg"),
            w0: document.querySelectorAll(".l2_via3 .l2_w0"),
            w1: document.querySelectorAll(".l2_via3 .l2_w1"),
            w2: document.querySelectorAll(".l2_via3 .l2_w2"),
            w3: document.querySelectorAll(".l2_via3 .l2_w3"),
        },
    }
    
    l1 = {
        via0: {
            validade: document.querySelectorAll(".l1_via0 .l1_v"),
            lru: document.querySelectorAll(".l1_via0 .l1_lru"),
            escrita: document.querySelectorAll(".l1_via0 .l1_e"),
            tag: document.querySelectorAll(".l1_via0 .l1_tag"),
            w0: document.querySelectorAll(".l1_via0 .l1_w0"),
            w1: document.querySelectorAll(".l1_via0 .l1_w1"),
            w2: document.querySelectorAll(".l1_via0 .l1_w2"),
            w3: document.querySelectorAll(".l1_via0 .l1_w3")
        },
        via1: {
            validade: document.querySelectorAll(".l1_via1 .l1_v"),
            lru: document.querySelectorAll(".l1_via1 .l1_lru"),
            escrita: document.querySelectorAll(".l1_via1 .l1_e"),
            tag: document.querySelectorAll(".l1_via1 .l1_tag"),
            w0: document.querySelectorAll(".l1_via1 .l1_w0"),
            w1: document.querySelectorAll(".l1_via1 .l1_w1"),
            w2: document.querySelectorAll(".l1_via1 .l1_w2"),
            w3: document.querySelectorAll(".l1_via1 .l1_w3")
        }
    }
    
    processador = {
        pc: document.querySelector(".processador_pc"),
        r1: document.querySelector(".processador_r1"),
        r2: document.querySelector(".processador_r2")
    }
    
    buffer_l1_l2 = document.querySelectorAll(".buffer_l1_l2")
    
    buffer_l2_mp = document.querySelectorAll(".buffer_l2_mp")
    
    console.log('done')
});

module.exports = {
    open_file() {
        
        ipcRenderer.send('open-file')
    },
    reset(){
        window.location.reload()
    },
    next(){

        if(is_file_loaded === false)
        {
            alert('A MP Está Vazia!')
            return
        }

        const inst = utilities.inst_interpreter(main_mem[processador.pc.innerHTML])

        if(inst.instrucao == 'lw')
        {
            aux = cachel1.search_l1(l1, 10)
            
            if(aux.estado == 1)
            {
                if(aux.via == 0)
                {
                    l1.via0.lru[aux.conjunto_alvo].innerHTML = 1;
                    utilities.lru_check(l1, 1)
                    proc.att_reg(l1.via0.w0[aux.conjunto_alvo], inst.reg, processador)
                }
                else
                {
                    l1.via1.lru[aux.conjunto_alvo].innerHTML = 1;
                    utilities.lru_check(l1, 1)
                    proc.att_reg(l1.via1.w0[aux.conjunto_alvo], inst.reg, processador)
                }       
            }
            else
            {
                falhas.l1.innerHTML++;

                aux = cachel2.search_l2(l2, inst.mem_pos)

                if(aux.estado == 1)
                {
                    if(aux.via == 0)
                    {
                        l2.via0.lru[aux.conjunto_alvo].innerHTML = 1
                        utilities.lru_check(l2, 2)
                        aux = cachel1.att_l1(aux, l1, l2, inst.mem_pos)
                        proc.att_reg(l1.via0.w0[aux], inst.reg, processador)
                    }
                    else if(aux.via == 1)
                    {
                        l2.via1.lru.innerHTML = 1;
                        proc.att_reg(l1.via1.w0[aux.conjunto_alvo], inst.reg, processador)
                    }
                    else if(aux.via == 2)
                    {
                        l2.via2.lru.innerHTML = 1;
                        proc.att_reg(l1.via1.w0[aux.conjunto_alvo], inst.reg, processador)
                    }
                    else
                    {
                        l2.via3.lru.innerHTML = 1;
                        proc.att_reg(l1.via1.w0[aux.conjunto_alvo], inst.reg, processador)
                    }
                }

            }


        }
        else
        {

        }
        
        processador.pc.innerHTML++;
    }
};

ipcRenderer.on('file-recieve', (e, a)=>{

    const main_mem_in = document.getElementsByClassName("mem")
    console.log(a)
    console.log(main_mem_in)
    for(let i = 0 ; i < a.length ; i++)
    {
        main_mem_in[i].innerHTML = a[i]
    }
    is_file_loaded = true
})




// ipcRenderer.on('main').then(data => console.log(data))

// const { ipcRenderer } = window.require('electron')

// // console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"

// // ipcRenderer.on('asynchronous-reply', (event, arg) => {
// //   console.log(arg) // prints "pong"
// // })
// // ipcRenderer.send('asynchronous-message', 'ping')

// ipcRenderer.on('file-channel', (event, arg)=>{
//     console.log(arg)
// })