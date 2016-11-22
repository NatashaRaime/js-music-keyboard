//// this works when I hardcode the sound ///

// $(document).ready(function(){
//   $(".instrument").on('click', 'button', function(event){
// alert('you pressed   ' + '  ' + $(this).html() + '');
//     var tone = new Audio('media/c_note.mp3');
//     tone.play();
//   });
// });

//// this is for the keydown function ///

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
    $(this).keydown(function(){
    var tone = key(event);
    var sound = audio(tone);
    sound[0].play();
  });
});
