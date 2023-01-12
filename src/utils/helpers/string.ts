const camelCaseToOriginalCase = (str: string) => {
  const originalCase = str.replace(/([A-Z])/g, ' $1').toLowerCase();

  return originalCase.charAt(0).toUpperCase() + originalCase.slice(1);
};

const to2Digits = (num: number) => {
  return num < 10 ? `0${num}` : num;
};

export { camelCaseToOriginalCase, to2Digits };
