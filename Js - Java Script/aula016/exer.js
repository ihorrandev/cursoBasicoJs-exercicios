function parimp(n){
    if (n%2==0){
        return "par";
    }else {
        return "impar";
    }
}

var res = parimp(11);
console.log(res);

console.log(parimp(4)); //tambem pode ser mostrado assim o resultado. 


function soma(n1= 0,n2=0){
    return(n1+n2)
}

console.log(soma(3));

var v = function x(n3,n4){
    return(n3-n4);
}
console.log(v(6,3));

var dobro = function count(n5){
    return (n5*2);
}
console.log(dobro(2));

function fatorial(i){
    var fat = 1
    for(var c = i; c > 1; c--){
        fat *=c;
    }
    return fat
}
console.log(fatorial(5));

function fatorial1(n){
    if (n==1){
        return 1;
    }else {
        return n * fatorial1(n-1);
    }
}
console.log(fatorial1(5));