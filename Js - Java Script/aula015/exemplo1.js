var num = [04,03,08,01,02];
num.push(07);
num.sort();
console.log(num);
console.log(`o vetor tem ${num.length} posições`);
console.log(`o primeiro valor do vetor é: ${num[0]}`);

//Vetor na tela
for(var pos=0;pos<num.length;pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`);
}

//For de uma forma simplificada 
//in = dentro
for(var pos in num){
    console.log(`O valor tem ${num[pos]}`);
}

//Achar um vetor
var eita = num.indexOf(4); 
if ( eita == -1){
    console.log('Não foi encontrado o valor');
}else {
    console.log(`Está na posição: ${eita}`);
}