module.exports = {
    dec2hex(dec){
        return dec.toString(16)
        // return '0x' + (dec+0x10000).toString(16).substr(-4).toUpperCase();
    },
    hex2dec(hex){
        return parseInt(hex, 16)
    },
    hex2bin(hex){
        return (parseInt(hex, 16).toString(2)).padStart(32, '0')
    },
    inst_interpreter(inst)
    {
        console.log(inst)
        const aux = (inst.innerHTML).split(" ")

        return{
            instrucao: aux[0],
            mem_pos: aux[1],
            reg: aux[2]
        }
    },
    lru_check(obj, cache_lvl)
    {
        if(cache_lvl == 1)
        {
            for(let i = 0 ; i < obj.via0.lru.length ; i++)
            {
                if(obj.via0.lru[i].innerHTML == 1 && obj.via1.lru[i].innerHTML == 1)
                {
                    obj.via0.lru[i].innerHTML = 0
                    obj.via1.lru[i].innerHTML = 0
                }
            }
        }
        else
        {
            for(let i = 0 ; i < obj.via0.lru.length ; i++)
            {
                if(obj.via0.lru[i].innerHTML == 1 && obj.via1.lru[i].innerHTML == 1
                    && obj.via2.lru[i].innerHTML == 1 && obj.via3.lru[i].innerHTML == 1)
                {
                    obj.via0.lru[i].innerHTML = 0
                    obj.via1.lru[i].innerHTML = 0
                    obj.via2.lru[i].innerHTML = 0
                    obj.via3.lru[i].innerHTML = 0
                }
            }
        }
    }
}