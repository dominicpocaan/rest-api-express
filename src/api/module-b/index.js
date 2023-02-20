const ModuleBController = require('./controller');

const Router = require('../../routes/Router');
const testRouteMiddleware = require('../../middlewares/testRouteMiddleware');

const router = new Router('/module/b');
router.routes(() => {
  router
    .get('/', ModuleBController.get)
    .middlewares([testRouteMiddleware])
    .validators([])
    .documentation({
      '/': {
        get: {
          summary: 'Test Module B',
          tags: ['module-b'],
          responses: {
            200: {
              description: 'Success Response',
              content: {
                'application/json': {
                  schema: {
                    type: 'object',
                    properties: {
                      status: { type: 'number' },
                      message: { type: 'string' },
                      data: {
                        type: 'object',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
});

module.exports = router;
