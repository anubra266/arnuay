export function roundNum(x) {
    if (isNaN(x)) return x;

    if (x < 9999) {
        return x;
    }

    if (x < 1000000) {
        return Math.round(x / 1000) + "000";
    }
    if (x < 10000000) {
        return (x / 1000000).toFixed(2) + "000000";
    }

    if (x < 1000000000) {
        return Math.round(x / 1000000) + "000000";
    }

    if (x < 1000000000000) {
        return Math.round(x / 1000000000) + "000000000";
    }

    return "1000000000000+";
}

// System for American Numbering
var th_val = ["", "thousand", "million", "billion", "trillion"];
// System for uncomment this line for Number of English
// var th_val = ['','thousand','million', 'milliard','billion'];

var dg_val = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
];
var tn_val = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
];
var tw_val = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
];
export function toWords(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g, "");
    var plus = s.indexOf("+") !== -1;
    s = s.replace("+", "");
    if (s != parseFloat(s)) return "not a number ";
    var x_val = s.indexOf(".");
    if (x_val == -1) x_val = s.length;
    if (x_val > 15) return "too big";
    var n_val = s.split("");
    var str_val = "";
    var sk_val = 0;
    for (var i = 0; i < x_val; i++) {
        if ((x_val - i) % 3 == 2) {
            if (n_val[i] == "1") {
                str_val += tn_val[Number(n_val[i + 1])] + " ";
                i++;
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += tw_val[n_val[i] - 2] + " ";
                sk_val = 1;
            }
        } else if (n_val[i] != 0) {
            str_val += dg_val[n_val[i]] + " ";
            if ((x_val - i) % 3 == 0) str_val += "hundred ";
            sk_val = 1;
        }
        if ((x_val - i) % 3 == 1) {
            if (sk_val) str_val += th_val[(x_val - i - 1) / 3] + " ";
            sk_val = 0;
        }
    }
    if (x_val != s.length) {
        var y_val = s.length;
        str_val += "point ";
        for (var i = x_val + 1; i < y_val; i++)
            str_val += dg_val[n_val[i]] + " ";
    }
    var res = str_val.replace(/\s+/g, " ");
    if (plus) res += "plus";
    return res;
}

export function parseAmount(amount) {
    return CommaFormatted(convertDecimal(amount));
}

export function convertDecimal(amount) {
    amount = parseFloat(amount);
    return amount.toFixed(2);
}

export function CommaFormatted(amount) {
    var delimiter = ","; // replace comma if desired
    var a = amount.split(".", 2);
    var d = a[1];
    var i = parseInt(a[0]);
    if (isNaN(i)) {
        return "";
    }
    var minus = "";
    if (i < 0) {
        minus = "-";
    }
    i = Math.abs(i);
    var n = new String(i);
    var a = [];
    while (n.length > 3) {
        var nn = n.substr(n.length - 3);
        a.unshift(nn);
        n = n.substr(0, n.length - 3);
    }
    if (n.length > 0) {
        a.unshift(n);
    }
    n = a.join(delimiter);
    if (d.length < 1) {
        amount = n;
    } else {
        amount = n + "." + d;
    }
    amount = minus + amount;
    return amount;
}
