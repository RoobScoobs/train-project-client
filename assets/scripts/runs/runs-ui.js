'use strict';

const app = require('../app.js');
const runsApi = require('./runs-api.js');

const failure = function (error) {
  console.error(error);
};


const getRunsSuccess = function (data) {
  let viewRuns = data.runs;
  $('.display-runs').html("<table class='table table-hover'><tr id='row1'><th>Description</th><th>Total Miles</th><th>Total Time</th><th>Run Completion Date</th><th> </th</tr></table>");
  for (let i = 0; i < viewRuns.length; i++) {
    $('#row1').after("<tr><td>" + viewRuns[i]['description'] +
    "</td><td>"+viewRuns[i]['total_miles'] + "</td><td>" + viewRuns[i]['total_time'] +
    "</td><td>"+viewRuns[i]['completion_date'] + "</td><td>" +
    "<button type='button' data-id=" + viewRuns[i].id + " class='close' aria-label='Close'><span aria-hidden='true'>&times;</span></button>" +
    "</td></tr>");
  };
};

const createRunsSuccess = function (data) {
  app.run = data.run;
  console.log(app.run);
};

const deleteRunsSuccess = function () {
  runsApi.getRuns()
  .done(getRunsSuccess)
  .fail(failure);
};

module.exports = {
  failure,
  getRunsSuccess,
  createRunsSuccess,
  deleteRunsSuccess
};
