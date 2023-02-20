const { errorHandlerWrapper } = require('../middlewares/errorHandler');

const registerController = (router, item) => {
  console.log(
    `[router] register router => method: ${item.method} | path: '${item.path}'`
  );

  switch (item.method) {
    case 'get':
      router.get(item.path, errorHandlerWrapper(item.controller));
      break;
    case 'post':
      router.post(item.path, errorHandlerWrapper(item.controller));
      break;
    case 'put':
      router.put(item.path, errorHandlerWrapper(item.controller));
      break;
    case 'patch':
      router.patch(item.path, errorHandlerWrapper(item.controller));
      break;
    case 'delete':
      router.delete(item.path, errorHandlerWrapper(item.controller));
      break;
    default:
      throw Error('[router] no router method matched!');
  }
};

module.exports = registerController;
