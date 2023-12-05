export default function cleanSet(set, startsWith) {
  if (startsWith === '') {
    return '';
  }
  let str = '';
  set.forEach((element) => {
    if (element.startsWith(startsWith)) {
      str += str === '' ? element.split(startsWith)[1] : `-${element.split(startsWith)[1]}`;
    }
  });
  return str;
}
