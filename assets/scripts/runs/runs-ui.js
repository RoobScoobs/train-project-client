'use strict';


const getRunsSuccess = function (data) {
  $('.display-runs').text(data.runs);
  console.log(data.runs);
};


module.exports = {
  getRunsSuccess
};
