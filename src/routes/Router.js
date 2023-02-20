class Router {
  constructor(prefix) {
    /**
     * items = [
     *  {
     *    method
     *    path
     *    controller
     *    middlewares
     *    validators
     *    swagger
     *  }
     * ]
     */
    this.items = [];
    this.prefix = prefix ?? '';
    this.version = '';
    this.swagger = [];
  }

  _register(path, controller, method) {
    this.items = [
      ...this.items,
      { method, path, controller, middlewares: [], validators: [] },
    ];
  }

  get(path, controller) {
    this._register(path, controller, 'get');
    return this;
  }

  post(path, controller) {
    this._register(path, controller, 'post');
    return this;
  }

  put(path, controller) {
    this._register(path, controller, 'put');
    return this;
  }

  patch(path, controller) {
    this._register(path, controller, 'patch');
    return this;
  }

  delete(path, controller) {
    this._register(path, controller, 'delete');
    return this;
  }

  middlewares(middlewares) {
    const route = this.items.pop();
    this.items = [...this.items, { ...route, middlewares }];
    return this;
  }

  validators(validators) {
    const route = this.items.pop();
    this.items = [...this.items, { ...route, validators }];
    return this;
  }

  documentation(documentation) {
    const route = this.items.pop();
    this.items = [...this.items, { ...route, documentation }];
    return this;
  }

  routes(callback) {
    callback();
    return this;
  }
}

module.exports = Router;
