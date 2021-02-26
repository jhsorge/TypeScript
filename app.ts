function add(n1:number, n2:number) {
    console.log(typeof number1);
    return n1+n2;
}
function subtract (n1:number, n2:number) {
    return n2-n1;
}

function accumulate(n1:number) {
    if (n1 == 0) {
        return 0;
    }
    else {
        return n1 + accumulate(n1-1)
    }
}

const number1 = 21;
const number2 = 2.8;
const number3 = 100;

const result1 = add(subtract (number2, number1), number2);
const result2 = accumulate(number3);
console.log(result1);
console.log(`The result of the accumulation of ${number3} is ${result2}.`);