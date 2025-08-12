const removeFromArray = function (array, ...arr) {
  return array.filter((item) => !arr.includes(item));
};
// Do not edit below this line
module.exports = removeFromArray;
