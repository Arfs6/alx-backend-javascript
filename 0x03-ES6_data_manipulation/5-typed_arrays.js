export default function createInt8TypedArray(length, position, value) {
  if (length - 1 < position) {
    throw new Error('Position outside range');
  }
  const newArray = new Int8Array(length);
  newArray[position] = value;
  return newArray;
}
