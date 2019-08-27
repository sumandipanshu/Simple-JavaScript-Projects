function telephoneCheck(str) {
    
    let regex = /^([1])?([\s])?([(])?([\d]{3})([)])?([-\s])?([\d]{3})([-\s])?([\d]{4})$/g;
    if (str.match(/\d/g).length == 11 && str[0] != '1') {
        return false;
    }
    if (/[()]/g.test(str)) {
        let l = str.match(/[()]/g).length;

        if (l != 2 && l != null) {
            return false;
        }
    }
    
telephoneCheck(1 (234)-567 8910);