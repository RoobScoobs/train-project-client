'use strict';

const app = require('../app.js');

const failure = function (error) {
  console.error(error);
};


const getRunsSuccess = function (data) {
  let anything = data.runs;
  $('.display-runs').html("<table class='table'><tr id='row1'><th>Description</th><th>Total Miles</th><th>Total Time</th><th>Run Completion Date</th></tr></table>");
  for (let i = 0; i < anything.length; i++) {
    $('#row1').after("<tr><td>" + anything[i]['description'] + "</td><td>"+anything[i]['total_miles']+"</td><td>"+anything[i]['total_time']+"</td><td>"+anything[i]['completion_date']+"</td></tr>");
  };
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
