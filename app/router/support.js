'use strict';
module.exports = (app) => {
  const { router, controller } = app;

  router.get(
    '/request',
    controller.page.support.getDataForRequest
  );

  router.get(
    '/support',
    controller.page.support.getDataForSupport
  );
 
};
