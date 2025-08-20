const palindromes = function (string) {
  var cleanString = string
    .replace(/[^A-Z0-9]/gi, "_")
    .replace(/_/gi, "")
    .toLowerCase();
  return cleanString == cleanString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
