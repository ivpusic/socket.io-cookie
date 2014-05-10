'use strict';

var cookie = require('cookie');

module.exports = function (socket, next) {
  socket.request.headers.cookie = cookie.parse(socket.request.headers.cookie);
  next();
};
