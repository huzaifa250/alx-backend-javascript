/**
 * returns a string of all the set values that start with
 * a specific string (startString).

 * It accepts two arguments: a set (Set) and a startString (String).

 * When a value starts with startString you only
 * append the rest of the string.
 * The string contains all the values of the set separated by -
 */
const cleanSet = (set, startString) => {
  const strings = [];

  if (startString === '' || typeof startString !== 'string') return '';
  set.forEach((s) => {
    if (typeof s === 'string' && s.startsWith(startString)) {
      strings.push(s.slice(startString.length));
    }
  });
  return strings.join('-');
};

export default cleanSet;
