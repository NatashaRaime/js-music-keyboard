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
    var note = (key.match(/^[a-g]$/))? key : " ";
    return note;
  };

  var key = function(event){
    alert('you pressed   ' + '  ' + $(this).html() + '');
    return $(this).html();
  };

  var audio = function(note){
    return $("#" + note + "Audio");
  };

  var note = function(button){
    return $(button).html();
  };

  var sounds = function(event){
    console.log(event);
    var tune = sounds().audio();
    var tone = new Audio(tune);
    tone.play();
  };

  $(document).ready(function(){
    $(".instrument").on('click', 'button', function(event){
      var tone = note(event.target);
      var sound = audio(tone);
      sound[0].play();
    });
  });

  $(document).keydown(function(event){

    var pressed = key(event);
    var tone = noteFromKey(pressed);
    var sound = audio(tone);
    sound[0].play();
  });
