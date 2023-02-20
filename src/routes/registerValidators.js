const { errorHandlerWrapper } = require('../middlewares/errorHandler');

const registerValidators = (router, item) => {
  item.validators.forEach((validator) => {
    switch (item.method) {
      case 'get':
        router.get(item.path, errorHandlerWrapper(validator));
        break;
      case 'post':
        router.post(item.path, errorHandlerWrapper(validator));
        break;
      case 'put':
        router.put(item.path, errorHandlerWrapper(validator));
        break;
      case 'patch':
        router.patch(item.path, errorHandlerWrapper(validator));
        break;
      case 'delete':
        router.delete(item.path, errorHandlerWrapper(validator));
        break;
      default:
        throw Error('[router] no router method matched!');
    }
  });
};

module.exports = registerValidators;
