$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  $( "#sortable" ).draggable();
  $( "#sortable" ).droppable();
} );

var addButton = $('.add-button')
var questLog = $('.quest-log')
var addForm = $('.add-form')

// var sortable = $('.sortable')

var questList = document.getElementById('sortable');

var embarkQuest = $('#embark-quest')

var messageId = $('#message_id')

embarkQuest.click(function() {
  var quest = messageId.val();

  $('<li>').text(quest).appendTo(questList)

  messageId.val('')

  questLog.show();
  addForm.hide();

  return false;
})

// var history = JSON.parse(localStorage.getItem("todoData"));
// localStorage.setItem("todoData", JSON.stringify(history));

$(document).on('dblclick','li', function(){
        $(this).fadeOut('fast');
});

// $(function() {
//    $('<li>').draggable();
//
//    $('#remove').droppable({
//        over: function(event, ui) {
//           ui.draggable.remove();
//        }
//    });
// });

questLog.show();
addForm.hide();

addButton.click(function() {
  questLog.hide();
  addForm.show();
});










// // #message_id use data here to add to list
// localstorage.setItem("quest", $('.message_id'))
// document.getElementById($(".sortable")).innerHTML = localstorage.getItem("quest")
