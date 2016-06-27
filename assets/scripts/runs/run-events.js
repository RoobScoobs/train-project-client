'use strict';

const runsApi = require('./runs-api.js');
const runsUi = require('./runs-ui.js');


const onGetRuns = function (event) {
  event.preventDefault();
  runsApi.getRuns()
  .done(runsUi.getRunsSuccess)
  .fail(runsUi.failure);
};




const runHandlers = () => {
  $('#view-all-runs').on('click', onGetRuns);
  $('#view-all-runs').on('click', function () {
  $('#open-runs').modal('show');
  });
};


module.exports = {
  runHandlers
};
