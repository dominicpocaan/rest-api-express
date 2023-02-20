const BadRequest = require('../../utils/exceptions/BadRequest');

const create = (req, res) => {
  throw new BadRequest({
    description: 'A POST Error Test',
    errorCode: 'ERRTEST0001',
    errorData: {
      test: 'error',
    },
  });

  res.success({ module: 'A POST' });
};

const get = (req, res) => {
  res.success({ module: 'A GET' });
};

module.exports = { create, get };
