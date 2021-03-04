/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {
        'I': 1,
        'IV': 4,
        'V': 5,
        'IX': 9,
        'X': 10,
        'IL': 49,
        'XL': 40,
        'L': 50,
        'XC': 90,
        'C': 100,
        'CD': 400,
        'D': 500,
        'CM': 900,
        'M': 1000
    };
    if(map[s]) {
        return map[s];
    }
    var number = 0;
    for(var i = 0; i  < s.length;) {
        var str = s[i] + s[i+1];
        if(map[str]) {
            number += map[str];
           i += 2;
       } else {
        number += map[s[i]];
        i++;           
       }
    }
    return number;
};
