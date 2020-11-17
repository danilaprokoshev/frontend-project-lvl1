export default (from, to) => {
  const generatedNumber = Math.round(Math.random() * (from - to) + to);
  return generatedNumber;
};
