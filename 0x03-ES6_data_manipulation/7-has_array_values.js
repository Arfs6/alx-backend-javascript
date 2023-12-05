export default function hasValuesFromArray(set, array) {
  const idx = array.findIndex((element) => set.has(element) === false);
  return idx === -1;
}
