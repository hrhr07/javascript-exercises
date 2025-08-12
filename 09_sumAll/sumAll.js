const sumAll = function (numA, numB) {
  if (numA > numB) {
    const temp = numA;
    numA = numB;
    numB = temp;
  }
  if (numA < 0 || numB < 0) return "ERROR";
  if (!Number.isInteger(numA) || !Number.isInteger(numB)) return "ERROR";

  let result = 0;
  for (let i = numA; i <= numB; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
