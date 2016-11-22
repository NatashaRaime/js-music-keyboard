//// this works when I hardcode the sound ///

// $(document).ready(function(){
//   $(".instrument").on('click', 'button', function(event){
// alert('you pressed   ' + '  ' + $(this).html() + '');
//     var tone = new Audio('media/c_note.mp3');
//     tone.play();
//   });
// });


// fast play
$(document).ready( function() {
 function playNote(note_letter) {
   // Audio tag is formatting like ex: "aAudio"
   var audio = $("#" + note_letter + "Audio")[0];
   audio.currentTime = 0;
   audio.play();
 }});
//// this is for the keydown function ///
//match keys & error handling
var noteFromKey = function(key){
  var regex = /^[a-g]$/;
  var note = (key.match(regex))? key : (" ");
  return note;
};

var key = function(event){
  var x = event.which;
  var note = String.fromCharCode(x);
  return note;
};

var audio = function(note){
  return $("#" + note + "Audio");
};

var note = function(button){
  return $(button).html();
};

$(document).ready(function(){
  $(".instrument").on('click', 'button', function(event){
    var tone = note(event.target);
    var sound = audio(tone);
    sound[0].play();
  });
    $(this).keydown(function(event){
    var tone = key(event);
    // var tune = noteFromKey(tone);
    var sound = audio(tone);
    sound[0].play();
  });
});
