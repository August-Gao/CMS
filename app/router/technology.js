'use strict';
module.exports = (app) => {
  const { router, controller } = app;

  router.get(
    '/technology',
    controller.page.technology.getDataForTechnology
  ); 
};
