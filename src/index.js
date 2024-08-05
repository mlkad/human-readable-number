module.exports = function toReadable(number) {
  const chars = {
      0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 
      10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 
      18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 
      80: 'eighty', 90: 'ninety'
  };

  if (number < 20) return chars[number];
  
  if (number < 100) {
      const tens = Math.floor(number / 10) * 10;
      const units = number % 10;
      return units === 0 ? chars[tens] : `${chars[tens]} ${chars[units]}`;
  }

  const hundreds = Math.floor(number / 100);
  const remainder = number % 100;

  if (remainder === 0) return `${chars[hundreds]} hundred`;
  if (remainder < 20) return `${chars[hundreds]} hundred ${chars[remainder]}`;

  const tens = Math.floor(remainder / 10) * 10;
  const units = remainder % 10;
  
  return units === 0 ? `${chars[hundreds]} hundred ${chars[tens]}` : `${chars[hundreds]} hundred ${chars[tens]} ${chars[units]}`;
};

