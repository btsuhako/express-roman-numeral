const mappings = {
  // M: 1000,
  // CM: 900,
  // D: 500,
  // CD: 400,
  // mapping is good up to 399
  C: 100,
  XC: 90,
  LX: 60,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function convertInt(num) {
  let result = '';

  Object.keys(mappings).forEach(key => {
    const value = mappings[key];
    while (num % value < num) {
      result += key;
      num -= value;
    }
  });

  return result;
}

module.exports = { convertInt };
