var num1 = process.argv[2]
var operator = process.argv[3]
var num2 = process.argv[4]
var result 

console.log(typeof operator)
console.log(operator)

switch (operator) {
    case '+':
        result = num1 + num2
        break;
    case '-':
        result = num1 - num2
        break;
    case '*':
        result = parseInt(num1) ** parseInt(num2)
        break;
    case '/':
        result = num1 / num2
        break;

    default:
        console.log("default it")
        break;
}

console.log(result)