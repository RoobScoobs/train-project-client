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
  runsApi.createRuns(data)
  .done(runsUi.createRunsSuccess)
  .fail(runsUi.failure);
};

const onDeleteRuns = function (event) {
  event.preventDefault();
  let id = $(this).data("id");
  runsApi.deleteRuns(id)
  .done(runsUi.deleteRunsSuccess)
  .fail(runsUi.failure);
};

const onUpdateRuns = function (event, enabled) {
  console.log('functioncall');
  let description = event.parent().siblings().children('#description');
  let miles = event.parent().siblings().children('#miles');
  let time = event.parent().siblings().children('#time');
  let date = event.parent().siblings().children('#date');
  description.attr('disabled', enabled);
  miles.attr('disabled', enabled);
  time.attr('disabled', enabled);
  date.attr('disabled', enabled);
  return [description.val(), miles.val(), time.val(), date.val()];
};

// const onUpdate = function (description, miles, time, date, id) {
//   runsApi.updateRuns();
// };

const runHandlers = () => {
  $('#view-all-runs').on('click', onGetRuns);
  $('#view-all-runs').on('click', function () {
    $('#open-runs').modal('show');
    });
  $('#form-to-create-run').on('click', function () {
    $('#open-create-run').modal('show');
    });
  $('#create-run').on('submit', onCreateRuns);
  $('#open-create-run').on('hidden.bs.modal', function () {
    $('#create-run').find("input[type=text], input[type=number], input[type=date]").val('');
    });
  $('.close-modal').on ('click', function() {
   $('#open-create-run').modal('hide');
    });
  $(document).on('click', '.close', onDeleteRuns);
  $(document).on('click', '.update', function () {
    let button = $(this);
    onUpdateRuns(button, false);
    });
  $(document).on('click', '.patch', function() {
    let values = onUpdateRuns($(this), true);
    let id = $(this).data("id");
    runsApi.updateRuns(values[0], values[1], values[2], values[3], id)
    .done(runsUi.runUpdateSuccess)
    .fail(runsUi.failure);
  });



  // console.log('firstHandler');
  // let button = $(this);
  // onUpdateRuns(button);
  // $(".update").not(button).hasClass("active-update") ? alert("Please save all runs") : $(".update").removeClass("active-update");
  // button.addClass("active-update");
  // function() {
  //   let description = $(this).parent().siblings().children('#description');
  //   let miles = $(this).parent().siblings().children('#miles');
  //   let time = $(this).parent().siblings().children('#time');
  //   let date = $(this).parent().siblings().children('#date');
  //   description.attr('disabled', false);
  //   miles.attr('disabled', false);
  //   time.attr('disabled', false);
  //   date.attr('disabled', false);
};


module.exports = {
  runHandlers
};
