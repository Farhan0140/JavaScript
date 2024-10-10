let num_1 = prompt('Enter first value')
let char = prompt('Enter (+ , - , * , / , % )')
let num_2 = prompt('Enter last value')

num_1 = parseInt(num_1)
num_2 = parseInt(num_2)

switch(char) {
    case "+":
        document.getElementById('P1').textContent = (num_1 + num_2);
        break;
    case "-":
        document.getElementById('P1').textContent = (num_1 - num_2);
        break;
    case "*":
        document.getElementById('P1').textContent = (num_1 * num_2);
        break;
    case "/":
        document.getElementById('P1').textContent = (num_1 / num_2);
        break;
    case "%":
        document.getElementById('P1').textContent = (num_1 % num_2);
        break;
    default:
        document.getElementById('P1').textContent = "Invalid Expression!"
}