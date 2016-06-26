'use strict';

const navBarHandlers = () => {
  $('#nav-sign-in').on('click', function () {
  $('#open-sign-in').modal('show');
  });
  $('#nav-sign-up').on('click', function () {
  $('#open-sign-up').modal('show');
  });
  $('#open-sign-up').on('hidden.bs.modal', function () {
  $('#sign-up').find("input[type=text], input[type=password]").val('');
  });
  $('#open-sign-in').on('hidden.bs.modal', function () {
  $('#sign-in').find("input[type=text], input[type=password]").val('');
  });
  $('#nav-options').on('click', function () {
  $('#open-options').modal('show');
  });
  $('#open-options').on('hidden.bs.modal', function () {
  $('#sign-in').find("input[type=text], input[type=password]").val('');
  });
};

module.exports = {
  navBarHandlers
};
