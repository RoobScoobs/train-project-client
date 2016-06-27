'use strict';

const app = require('../app.js');

const failure = function (error) {
  console.error(error);
};

const getRunsSuccess = function (data) {
  $('.display-runs').text(data.runs);
  console.log(data.runs);
};

const createRunsSuccess = function (data) {
  app.run = data.run;
  console.log(app.run);
};

module.exports = {
  failure,
  getRunsSuccess,
  createRunsSuccess
};
