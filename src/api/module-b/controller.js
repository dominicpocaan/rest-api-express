const get = (req, res) => {
  res.success({ module: 'B GET' });
};

module.exports = { get };
