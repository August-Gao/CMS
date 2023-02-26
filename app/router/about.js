'use strict';
module.exports = (app) => {
  const { router, controller } = app;

  router.get(
    '/contact-us',
    controller.page.about.getDataForContact
  );

  router.get(
    '/about-us',
    controller.page.about.getDataForAbout
  );
  router.get(
    '/comment-us',
    controller.page.about.getDataForComment
  );

  router.get(
    '/blog',
    controller.page.about.getDataForBlog
  );
};
