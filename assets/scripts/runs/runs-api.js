'use strict';

const app = require('../app.js');


const getRuns = function () {
  return $.ajax ({
    url: app.host + '/runs/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

const createRuns = function (data) {
  return $.ajax({
    url: app.host + '/runs/',
    method: "POST",
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data
  });
};

const updateRuns = function(description, total_miles, total_time, completion_date) {
  return $.ajax({
    url: app.host + '/runs/' + app.runs.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token='+ app.user.token,
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
    url: app.host + '/runs/' + app.runs.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token='+ app.user.token
    }
  });
};

module.exports = {
    getRuns,
    createRuns,
    updateRuns,
    deleteRuns
};
