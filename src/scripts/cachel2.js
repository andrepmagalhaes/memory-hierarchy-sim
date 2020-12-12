const utilities = require("../utilities")

module.exports = {
    search_l2(obj, mem_pos){
        const conjunto_alvo = Number(utilities.hex2dec(mem_pos)) % 8;

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
            else if(tag == obj.via2.tag[conjunto_alvo] && obj.via2.validade[conjunto_alvo] == 1)
            {
                return {
                    estado: 1,
                    via: 2,
                    conjunto_alvo: conjunto_alvo
                }
            }
            else if(tag == obj.via3.tag[conjunto_alvo] && obj.via3.validade[conjunto_alvo] == 1)
            {
                return {
                    estado: 1,
                    via: 3,
                    conjunto_alvo: conjunto_alvo
                }
            }
           else
           {
               return {
                   estado: 0
               }
           }
}
}