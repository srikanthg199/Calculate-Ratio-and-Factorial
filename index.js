const factorial = require("../factorial/index");
const ratio = require("../ratio/index");

const ratioAndFactorial = (n1, n2, n3) => {
  const obj1 = {
    ratio: ratio(n1, n2),
    factorial: factorial(n3),
  };
  return obj1;
};

module.exports = ratioAndFactorial;
