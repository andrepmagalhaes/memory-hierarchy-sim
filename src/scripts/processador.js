const utilities = require("../utilities")

module.exports = {
    att_reg(word, reg_dest, proc_obj){
        if(reg_dest == 'r1')
        {
            proc_obj.r1.innerHTML = word.innerHTML
        }
        else
        {
            proc_obj.r2.innerHTML = word.innerHTML
        }
    }
}