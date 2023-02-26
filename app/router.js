'use strict';
module.exports = (app) => {
  require('./router/io')(app);
  require('./router/api')(app);
  require('./router/home')(app);
  require('./router/users')(app);
  require('./router/manage')(app);
  require('./router/about')(app);
  require('./router/support')(app);
  require('./router/solution')(app);
  require('./router/technology')(app);
};
