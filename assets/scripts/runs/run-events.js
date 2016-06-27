'use strict';

const runsApi = require('./runs-api.js');
const runsUi = require('./runs-ui.js');
const getFormFields = require('../../../lib/get-form-fields');



const onGetRuns = function (event) {
  event.preventDefault();
  runsApi.getRuns()
  .done(runsUi.getRunsSuccess)
  .fail(runsUi.failure);
};

const onCreateRuns = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log(data);
  runsApi.createRuns(data)
  .done(runsUi.createRunsSuccess)
  .fail(runsUi.failure);
};
// $('#addClimbModal').on('submit', function (event) {
//       event.preventDefault();
//       let data = getFormFields(event.target);
//       //get data, prevents default
//       authClimbApi.createClimb(authClimbUi.createClimbSuccess, authUi.failure, data);
//   });



const runHandlers = () => {
  $('#view-all-runs').on('click', onGetRuns);
  $('#view-all-runs').on('click', function () {
  $('#open-runs').modal('show');
  });
  // $('#create-run').on('click', function () {
  // $('#open-create-run').modal('show');
  // });
  $('#create-run').on('submit', onCreateRuns);
};


module.exports = {
  runHandlers
};
