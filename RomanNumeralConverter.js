function convertToRoman(n) {
    let table = {
        0: '',
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M'
    };
    
    if(n>3999 || n<1){
      return undefined;
    }
    
    function calc(num) {
        if (num <= 10) {
            num = table[num];
        } else if (num < 40) {
            num = table[10].repeat(num / 10) + table[num % 10];
        } else if (num < 50) {
            num = table[40] + table[num % 40];
        } else if (num < 90) {
            num = table[50] + table[10].repeat((num % 50) / 10) + table[(num % 50) % 10];
        } else if (num < 100) {
            num = table[90] + table[num % 90];
        } else if (num < 400) {
            num = table[100].repeat(num / 100) + table[(num % 100) - (num % 10)] + table[(num % 100) % 10];
        } else if (num < 500) {
            num = table[400] + table[(num % 400) - (num % 10)] + table[(num % 100) % 10];
        } else if (num < 900) {
            num = table[500] + table[100].repeat((num % 500) / 100) + table[(num % 100) - (num % 10)] + table[(num % 100) % 10];
        } else if (num < 1000) {
            num = table[900] + table[(num % 900) - (num % 10)] + table[(num % 100) % 10];
        }
        return num;
    }


    if (n < 1000) {
        n = calc(n);
    } else {
        n = table[1000].repeat(n / 1000) + calc(n % 1000);
    }
    return n;
}

convertToRoman(2501);