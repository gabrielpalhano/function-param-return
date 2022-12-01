/* function parimp (n) {
    if(n % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parimp(11);

console.log(res); */

/* function somar(n1=0, n2=0) {
    return n1 + n2
}

console.log(somar(5, 6));
console.log(somar(6)); */

/* var g = function(x) {
    return x*2
}

console.log(g(6)); */


/* function fatorial(n) {
    let f = 1;
        for(let c = n; c > 1; c--) {
            f *= c
        }
        return f
}

console.log(fatorial(5)); */

function fatorial(n) {
    if(n == 1) {
        return 1
    } else {
        return n *= fatorial(n - 1)
    }
}

console.log(fatorial(5));