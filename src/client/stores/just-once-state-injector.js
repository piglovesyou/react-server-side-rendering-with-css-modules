let valueForOnce = null;

module.exports.consume = () => {
  if (valueForOnce) {
    const value = valueForOnce;
    valueForOnce = null;
    return value;
  }
  return undefined;
};

module.exports.set = (value) => {
  valueForOnce = value;
};
