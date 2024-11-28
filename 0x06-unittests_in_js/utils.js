const Utils = (type, a, b) => {
  if (type === 'SUM') {
    return Math.round(a) + Math.round(b);
  }

  if (type === 'SUBTRACT') {
    return Math.round(a) - Math.round(b);
  }

  if (type === 'DIVIDE') {
    if (Math.round(b) === 0) {
      return "Error";
    } else {
      return Math.round(a) / Math.round(b);
    }
  }

  throw new Error("Invalid operation type"); /*unsuported values */
};

module.exports = Utils;

