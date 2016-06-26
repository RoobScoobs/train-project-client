'use strict';

const authEvents = require('./auth/events.js');
const navEvents = require('./navbar-events.js');

// On document ready
$(() => {
 authEvents.addHandlers();
 navEvents.navBarHandlers();
});
