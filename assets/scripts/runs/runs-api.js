'use strict';

const runApp = require('../app.js');


const getRuns = function () {
  return $.ajax ({
    url: runApp.host + '/runs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + runApp.user.token,
    },
  });
};

const createRuns = function () {
  return $.ajax({
    url: runApp.host + '/runs/',
    method: "POST",
    headers: {
      Authorization: 'Token token='+ runApp.user.token,
    },
  });
};

const updateRuns = function(description, total_miles, total_time, completion_date) {
  return $.ajax({
    url: runApp.host + '/runs/' + runApp.runs.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token='+ runApp.user.token,
    },
    data: {
      "runs": {
        "description": description,
        "total_miles": total_miles,
        "total_time": total_time,
        "completion_date": completion_date
      }
    }
  });
};

const deleteRuns = function () {
  return $.ajax ({
    url: runApp.host + '/runs/' + runApp.runs.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token='+ runApp.user.token
    }
  });
};

module.exports = {
    getRuns,
    createRuns,
    updateRuns,
    deleteRuns
};
