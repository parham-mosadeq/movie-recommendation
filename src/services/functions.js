export const numberModifier = (num = 1) => {
  const newNum = num.toLocaleString();
  return newNum;
};

export const textCut = (txt) => {
  const newTxt = txt.split(' ').slice(0, 17).join(' ');

  return newTxt;
};
