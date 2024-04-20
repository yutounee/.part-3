const makeStr = (data, temp, currentIndex, mode, str = '') => {
  data.map((each, i) => str += temp(each, i, currentIndex, mode));

  return str;
}

export {
  makeStr,
}