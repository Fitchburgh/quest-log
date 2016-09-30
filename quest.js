$( function() {
  $( "#sortable" ).sortable();
  $( "#sortable" ).disableSelection();
  // $( "#sortable" ).draggable();
  // $( "#sortable" ).droppable();
} );

var addButton = $('.add-button')
var questLog = $('.quest-log')
var addForm = $('.add-form')

// var sortable = $('.sortable')

var questList = document.getElementById('sortable');

var embarkQuest = $('#embark-quest')

var messageId = $('#message_id')

var editButton = $('#edit')


embarkQuest.click(function() {
  var quest = messageId.val();

  $('<li>').text(quest).appendTo(questList)

  messageId.val('')

  questLog.fadeIn();
  addForm.fadeOut();
  return false;
})

var editStatus = false

editButton.click(function(){
  editStatus = true
  if (editStatus == true) {
    $(document).on('click', 'li', function(){
      addForm.fadeIn('slow');
      $('li').fadeOut('slow');
      editStatus = false;
    })
  }
})

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
  editStatus = false;
});










// // #message_id use data here to add to list
// localstorage.setItem("quest", $('.message_id'))
// document.getElementById($(".sortable")).innerHTML = localstorage.getItem("quest")
