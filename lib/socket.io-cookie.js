'use strict';

var cookie = require('cookie');

module.exports = function (socket, next) {
	if (socket.request.headers.cookie) {
		socket.request.cookies = cookie.parse(socket.request.headers.cookie);
	}

  next();
};
