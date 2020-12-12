const utilities = require("../utilities")

module.exports = {
    search_l1(obj, mem_pos){
            const conjunto_alvo = Number(utilities.hex2dec(mem_pos)) % 4;

            console.log(conjunto_alvo)
            console.log(utilities.hex2bin(mem_pos).length);
            console.log(utilities.hex2bin(mem_pos));
            console.log(utilities.hex2bin(mem_pos).substring(0, 27).length);
            console.log(utilities.hex2bin(mem_pos).substring(0, 27));

            const tag = utilities.hex2bin(mem_pos).substring(0, 27)

            if(tag == obj.via0.tag[conjunto_alvo] && obj.via0.validade[conjunto_alvo] == 1)
            {
                return {
                    estado: 1,
                    via: 0,
                    conjunto_alvo: conjunto_alvo
                }
            }
            else if(tag == obj.via1.tag[conjunto_alvo] && obj.via1.validade[conjunto_alvo] == 1)
            {
                return {
                    estado: 1,
                    via: 1,
                    conjunto_alvo: conjunto_alvo
                }
            }
           else
           {
               return {
                   estado: 0
               }
           }
    },
    att_l1(results, l1_obj, l2_obj, mem_pos)
    {
        const conjunto_alvo = Number(utilities.hex2dec(mem_pos)) % 4;
        
        if(l1_obj.via0.lru[conjunto_alvo].innerHTML == 0)
        {
            if(results.via == 0 )
            {
                l1_obj.via0.w0[conjunto_alvo].innerHTML = l2_obj.via0.w0[results.conjunto_alvo].innerHTML
                l1_obj.via0.w1[conjunto_alvo].innerHTML = l2_obj.via0.w1[results.conjunto_alvo].innerHTML
                l1_obj.via0.w2[conjunto_alvo].innerHTML = l2_obj.via0.w2[results.conjunto_alvo].innerHTML
                l1_obj.via0.w3[conjunto_alvo].innerHTML = l2_obj.via0.w3[results.conjunto_alvo].innerHTML
                l1_obj.via0.tag[conjunto_alvo].innerHTML = l2_obj.via0.tag[results.conjunto_alvo].innerHTML
                l1_obj.via0.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via0.lru[conjunto_alvo].innerHTML = 1
            }
            else if(results.via == 1)
            {
                l1_obj.via0.w0[conjunto_alvo].innerHTML = l2_obj.via1.w0[results.conjunto_alvo].innerHTML
                l1_obj.via0.w1[conjunto_alvo].innerHTML = l2_obj.via1.w1[results.conjunto_alvo].innerHTML
                l1_obj.via0.w2[conjunto_alvo].innerHTML = l2_obj.via1.w2[results.conjunto_alvo].innerHTML
                l1_obj.via0.w3[conjunto_alvo].innerHTML = l2_obj.via1.w3[results.conjunto_alvo].innerHTML
                l1_obj.via0.tag[conjunto_alvo].innerHTML = l2_obj.via1.tag[results.conjunto_alvo].innerHTML
                l1_obj.via0.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via0.lru[conjunto_alvo].innerHTML = 1
            }
            else if(results.via == 2)
            {
                l1_obj.via0.w0[conjunto_alvo].innerHTML = l2_obj.via2.w0[results.conjunto_alvo].innerHTML
                l1_obj.via0.w1[conjunto_alvo].innerHTML = l2_obj.via2.w1[results.conjunto_alvo].innerHTML
                l1_obj.via0.w2[conjunto_alvo].innerHTML = l2_obj.via2.w2[results.conjunto_alvo].innerHTML
                l1_obj.via0.w3[conjunto_alvo].innerHTML = l2_obj.via2.w3[results.conjunto_alvo].innerHTML
                l1_obj.via0.tag[conjunto_alvo].innerHTML = l2_obj.via2.tag[results.conjunto_alvo].innerHTML
                l1_obj.via0.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via0.lru[conjunto_alvo].innerHTML = 1
            }
            else
            {
                l1_obj.via0.w0[conjunto_alvo].innerHTML = l2_obj.via3.w0[results.conjunto_alvo].innerHTML
                l1_obj.via0.w1[conjunto_alvo].innerHTML = l2_obj.via3.w1[results.conjunto_alvo].innerHTML
                l1_obj.via0.w2[conjunto_alvo].innerHTML = l2_obj.via3.w2[results.conjunto_alvo].innerHTML
                l1_obj.via0.w3[conjunto_alvo].innerHTML = l2_obj.via3.w3[results.conjunto_alvo].innerHTML
                l1_obj.via0.tag[conjunto_alvo].innerHTML = l2_obj.via3.tag[results.conjunto_alvo].innerHTML
                l1_obj.via0.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via0.lru[conjunto_alvo].innerHTML = 1
            }
            
            return 0
        }
        else
        {
            if(results.via == 0 )
            {
                l1_obj.via1.w0[conjunto_alvo].innerHTML = l2_obj.via0.w0[results.conjunto_alvo].innerHTML
                l1_obj.via1.w1[conjunto_alvo].innerHTML = l2_obj.via0.w1[results.conjunto_alvo].innerHTML
                l1_obj.via1.w2[conjunto_alvo].innerHTML = l2_obj.via0.w2[results.conjunto_alvo].innerHTML
                l1_obj.via1.w3[conjunto_alvo].innerHTML = l2_obj.via0.w3[results.conjunto_alvo].innerHTML
                l1_obj.via1.tag[conjunto_alvo].innerHTML = l2_obj.via0.tag[results.conjunto_alvo].innerHTML
                l1_obj.via1.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via1.lru[conjunto_alvo].innerHTML = 1
            }
            else if(results.via == 1)
            {
                l1_obj.via1.w0[conjunto_alvo].innerHTML = l2_obj.via1.w0[results.conjunto_alvo].innerHTML
                l1_obj.via1.w1[conjunto_alvo].innerHTML = l2_obj.via1.w1[results.conjunto_alvo].innerHTML
                l1_obj.via1.w2[conjunto_alvo].innerHTML = l2_obj.via1.w2[results.conjunto_alvo].innerHTML
                l1_obj.via1.w3[conjunto_alvo].innerHTML = l2_obj.via1.w3[results.conjunto_alvo].innerHTML
                l1_obj.via1.tag[conjunto_alvo].innerHTML = l2_obj.via1.tag[results.conjunto_alvo].innerHTML
                l1_obj.via1.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via1.lru[conjunto_alvo].innerHTML = 1
            }
            else if(results.via == 2)
            {
                l1_obj.via1.w0[conjunto_alvo].innerHTML = l2_obj.via2.w0[results.conjunto_alvo].innerHTML
                l1_obj.via1.w1[conjunto_alvo].innerHTML = l2_obj.via2.w1[results.conjunto_alvo].innerHTML
                l1_obj.via1.w2[conjunto_alvo].innerHTML = l2_obj.via2.w2[results.conjunto_alvo].innerHTML
                l1_obj.via1.w3[conjunto_alvo].innerHTML = l2_obj.via2.w3[results.conjunto_alvo].innerHTML
                l1_obj.via1.tag[conjunto_alvo].innerHTML = l2_obj.via2.tag[results.conjunto_alvo].innerHTML
                l1_obj.via1.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via1.lru[conjunto_alvo].innerHTML = 1
            }
            else
            {
                l1_obj.via1.w0[conjunto_alvo].innerHTML = l2_obj.via3.w0[results.conjunto_alvo].innerHTML
                l1_obj.via1.w1[conjunto_alvo].innerHTML = l2_obj.via3.w1[results.conjunto_alvo].innerHTML
                l1_obj.via1.w2[conjunto_alvo].innerHTML = l2_obj.via3.w2[results.conjunto_alvo].innerHTML
                l1_obj.via1.w3[conjunto_alvo].innerHTML = l2_obj.via3.w3[results.conjunto_alvo].innerHTML
                l1_obj.via1.tag[conjunto_alvo].innerHTML = l2_obj.via3.tag[results.conjunto_alvo].innerHTML
                l1_obj.via1.validade[conjunto_alvo].innerHTML = 1
                l1_obj.via1.lru[conjunto_alvo].innerHTML = 1
            }

            return 1
        }

    }
}