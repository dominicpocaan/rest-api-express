const ModuleAController = require('./controller');

const Router = require('../../routes/Router');
const testRouteMiddleware = require('../../middlewares/testRouteMiddleware');

const router = new Router('/module/a');
router.routes(() => {
  router
    .get('/', ModuleAController.get)
    .middlewares([testRouteMiddleware])
    .validators([])
    .documentation({
      '/': {
        get: {
          summary: 'Test Module A',
          tags: ['module-a'],
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

  router
    .post('/', ModuleAController.create)
    .middlewares([testRouteMiddleware])
    .validators([])
    .documentation({
      '/': {
        post: {
          summary: 'Test Module A',
          tags: ['module-a'],
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
