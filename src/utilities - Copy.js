module.exports = {
    dec2hex(dec){
        return '0x' + (dec+0x10000).toString(16).substr(-4).toUpperCase();
    }
}