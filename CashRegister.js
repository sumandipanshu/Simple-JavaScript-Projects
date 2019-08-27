var currencyTable = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    'TEN': 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100

};

function checkCashRegister(price, cash, cid) { //cid=cash in drawer
    let due, total = 0,
        change = cash - price;
    cid.forEach(a => total += a[1]);
    total = total.toFixed(2);
    due = total - change;

    if (due < 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    } else if (due == 0) {
        return {
            status: "CLOSED",
            change: [...cid]
        }
    }
    let size = cid.length,
        returnCash = [];
    
    for (let i = size - 1; i >= 0 && change > 0; i--) {
        let quo = Math.floor(change / currencyTable[cid[i][0]]);

        if (quo) {
            if (quo * currencyTable[cid[i][0]] >= cid[i][1]) {
                change -= cid[i][1];
                returnCash.push([cid[i][0], cid[i][1]]);
            } else {
                change -= quo * currencyTable[cid[i][0]];
                returnCash.push([cid[i][0], quo * currencyTable[cid[i][0]]]);
            }
        }
        change = parseFloat(change.toFixed(2));
    }
    
    if (change != 0) {
        return {
            status: "INSUFFICIENT_FUNDS",
            change: []
        };
    }
    return {
        status: "OPEN",
        change: [...returnCash]
    };
}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);