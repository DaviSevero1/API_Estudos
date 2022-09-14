var num = 1;
num = 3;
var price = 1.5;
var myName = 'davi severo';
var trueValue = true;
var nuLLvAR = null;
var undefined;

console.log('num:' + num)
console.log('Meu nome: ' + myName);
console.log('trueValue' + trueValue);
console.log('price'+ price);
console.log('nullvar' + nuLLvAR);

var myVariable = 'global';
myOtherVariable = 'global';

function myFunction(){
    var myVariable = 'local';
    return myVariable;

}

function myOtherFunction(){
    myOtherVariable = 'local';
    return myOtherVariable;
}