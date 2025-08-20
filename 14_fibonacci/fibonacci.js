const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  var a = 0;
  var b = 1;
  var temp;
  for (var i = 0; i < num; i++) {
    temp = b;
    b = a + b;
    a = temp;
  }
  return a;
};

// Do not edit below this line
module.exports = fibonacci;
