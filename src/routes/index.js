const fs = require('fs');
const express = require('express');

const registerController = require('./registerController');
const registerMiddlewares = require('./registerMiddlewares');
const registerValidators = require('./registerValidators');

const registerAll = (app) => {
  const apis = fs.readdirSync(`${process.cwd()}/src/api`);

  for (const module of apis) {
    const routes = require(`${process.cwd()}/src/api/${module}`);

    const router = express.Router();

    routes.items.forEach((item) => {
      registerMiddlewares(router, item);
      registerValidators(router, item);
      registerController(router, item);
    });

    app.use(routes.prefix || '/', router);
  }
};

const swagger = () => {
  const apis = fs.readdirSync(`${process.cwd()}/src/api`);

  const paths = {};

  for (const module of apis) {
    const routes = require(`${process.cwd()}/src/api/${module}`);

    const prefix = routes.prefix;

    routes.items.forEach((item) => {
      const path = `${prefix}${Object.keys(item.documentation)[0]}`;

      if (paths[path]) {
        paths[path] = {
          ...paths[path],
          ...Object.values(item.documentation)[0],
        };
      } else {
        paths[path] = Object.values(item.documentation)[0];
      }
    });
  }

  return paths;
};

module.exports = { registerAll, swagger };
