/**
 * Creates a buffer array with a given position set to a given value.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position to modify.
 * @param {Number} value - The value to be stored in the position.
 * @returns {DataView}
 * @author Multi
 */
const createInt8TypedArray = (length, position, value) => {
  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);
  if (position > int8Array.length) throw new Error('Position outside range');
  int8Array[position] = value;
  return new DataView(buffer);
};

export default createInt8TypedArray;
