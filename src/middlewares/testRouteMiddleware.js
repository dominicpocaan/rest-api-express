const testRouteMiddleware = (req, res, next) => {
  console.log('[test] route middleware');

  next();
};

module.exports = testRouteMiddleware;
