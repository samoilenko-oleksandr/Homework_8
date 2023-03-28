
const operation = prompt("Що ви хочете зробити? (add, sub, mult, div)");

const num1 = prompt("Введіть перше число:");

const num2 = prompt("Введіть друге число:");

let result;

if (operation === "add") {
  result = num1 + num2;
} else if (operation === "sub") {
  result = num1 - num2;
} else if (operation === "mult") {
  result = num1 * num2;
} else if (operation === "div") {
  result = num1 / num2;
}

alert(`${num1} ${operation} ${num2} = ${result}`);
