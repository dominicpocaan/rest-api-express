const cors = require('cors');
const express = require('express');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUIExpress = require('swagger-ui-express');

const accessLogger = require('./middlewares/accessLogger');
const { errorHandler } = require('./middlewares/errorHandler');
const extendedResponse = require('./middlewares/extendedReponse');

const Routes = require('./routes');

const PORT = process.env.PORT ?? 3000;

const app = express();

class App {
  static start(command) {
    switch (command) {
      case 'test':
        // Run test
        break;

      // Add more
      default:
        this.run();
    }
  }

  static async run() {
    app.use(cors());

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    const specs = swaggerJSDoc({
      definition: {
        openapi: '3.0.0',
        info: {
          version: '1',
          title: 'REST-API Express',
          description: 'REST-API Express',
        },
        components: {
          securitySchemes: {
            JWT: {
              type: 'http',
              scheme: 'bearer',
              in: 'header',
              bearerFormat: 'JWT',
            },
          },
        },
        security: [{ JWT: [] }],
        paths: Routes.swagger(),
      },
      apis: [],
    });
    app.use('/docs', swaggerUIExpress.serve, swaggerUIExpress.setup(specs));

    app.use(accessLogger);
    app.use(extendedResponse);

    Routes.registerAll(app);

    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`[server] running on port ${PORT} \n`);
    });
  }

  static instance() {
    return app;
  }
}

module.exports = {
  App,
};
