const { errorHandlerWrapper } = require('../middlewares/errorHandler');

const registerMiddlewares = (router, item) => {
  item.middlewares.forEach((middleware) => {
    switch (item.method) {
      case 'get':
        router.get(item.path, errorHandlerWrapper(middleware));
        break;
      case 'post':
        router.post(item.path, errorHandlerWrapper(middleware));
        break;
      case 'put':
        router.put(item.path, errorHandlerWrapper(middleware));
        break;
      case 'patch':
        router.patch(item.path, errorHandlerWrapper(middleware));
        break;
      case 'delete':
        router.delete(item.path, errorHandlerWrapper(middleware));
        break;
      default:
        throw Error('[router] no router method matched!');
    }
  });
};

module.exports = registerMiddlewares;
