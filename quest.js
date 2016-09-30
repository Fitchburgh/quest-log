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

  questLog.fadeIn();
  addForm.fadeOut();

  return false;
})

// var history = JSON.parse(localStorage.getItem("todoData"));
// localStorage.setItem("todoData", JSON.stringify(history));

$(document).on('dblclick','li', function(){
        $(this).fadeOut('fast');
});

// $.fn.editable.defaults.mode = 'inline';
// $(document).ready(function() {
//     $('li').editable();
// });

// $(function() {
//    $('<li>').draggable();
//
//    $('#remove').droppable({
//        over: function(event, ui) {
//           ui.draggable.remove();
//        }
//    });
// });

questLog.fadeIn('slow');
addForm.fadeOut();

addButton.click(function() {
  questLog.fadeOut();
  addForm.fadeIn('slow');
});










// // #message_id use data here to add to list
// localstorage.setItem("quest", $('.message_id'))
// document.getElementById($(".sortable")).innerHTML = localstorage.getItem("quest")
