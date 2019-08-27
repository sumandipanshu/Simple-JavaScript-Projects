function rot13(str) { 
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        let val = str.charCodeAt(i);

        if (val >= 65 && val <= 90) {

            let decodedVal = val + 13;

            if (decodedVal > 90) {
                decodedVal = decodedVal - 91;
                decodedVal = decodedVal + 65;

            }

            newStr += String.fromCharCode(parseInt(decodedVal));
                     
        } else {
            newStr += str[i];
        }
    }
    return newStr;
}

rot13("SERR CVMMN!");