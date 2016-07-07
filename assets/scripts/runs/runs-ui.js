'use strict';

const app = require('../app.js');
const runsApi = require('./runs-api.js');

const failure = function (error) {
  // console.log("Failure" + error);
};


const getRunsSuccess = function (data) {
  let viewRuns = data.runs;
  $('.display-runs').html("<table class='table table-hover'><tr id='row1'><th>Description</th><th>Total Miles</th><th>Total Time</th><th>Date</th><th> </th</tr></table>");
  for (let i = 0; i < viewRuns.length; i++) {
    $('#row1').after("<tr><td><input type='text' id='description' disabled value='" + viewRuns[i]['description'] + "'" +
    "</td><td><input type='text' id='miles' disabled value='" + viewRuns[i]['total_miles'] + "'" +
    "</td><td><input type='text' id='time' disabled value='" + viewRuns[i]['total_time'] + "'" +
    "</td><td><input type='text' id='date' disabled value='" + viewRuns[i]['completion_date'] + "'" +
    "</td><td><button type='button' class='edit helper' data-id='" + viewRuns[i].id + "'" +
    " class='edit' aria-label='Close'><span aria-hidden='true'>E</span></button>" +
    "</td>" +
    "<td><button type='button' class='update helper' data-id='" + viewRuns[i].id + "'" +
    " class='edit' aria-label='Close'><span aria-hidden='true'>U</span></button>" +
    "</td>" +
    "</td><td><button type='button' data-id='" + viewRuns[i].id + "'" +
    " class='close' aria-label='Close'><span class='x' aria-hidden='true'>&times;</span></button>" +
    "</td></tr>");
  };
};

const createRunsSuccess = function (data) {
  app.run = data.run;
};

const runUpdateSuccess = function (data) {
  // console.log("Success" + data);
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
  deleteRunsSuccess,
  runUpdateSuccess
};
