'use strict';
module.exports = (app) => {
  const { router, controller } = app;

  router.get(
    '/solution',
    controller.page.solution.getDataForSolution
  );


 
};
