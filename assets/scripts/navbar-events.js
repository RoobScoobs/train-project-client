'use strict';

const navBarHandlers = () => {
  $('#nav-sign-in').on('click', function () {
    $('#open-sign-in').modal('show');
    });
  $('.close-modal').on ('click', function() {
    $('#open-sign-in').modal('hide');
    });
  $('#nav-sign-up').on('click', function () {
    $('#open-sign-up').modal('show');
    });
  $('.close-modal').on ('click', function() {
    $('#open-sign-up').modal('hide');
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
  $('.close-modal').on ('click', function() {
    $('#open-options').modal('hide');
    });
  $('#open-options').on('hidden.bs.modal', function () {
    $('#change-password').find("input[type=password]").val('');
    });
};

module.exports = {
  navBarHandlers
};
