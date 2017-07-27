
$(document).ready(function(){
  $(".tweet-compose").on("click", function(){
    $(this).css("height", "5em");
    $("#tweet-controls").css("display", "inline");
    $("#tweet-controls").css("float", "right");
  });//tweet compose close
//  Edit Below This Line!!!!!!!!!!!!!!!!!!!!!!!!!
  $(".tweet-compose").on("click", function(){
    $(".stats").css("display", "inline-block");
  });
  //
  $(".tweets").hover (function(){
      $(".tweet-actions").css("display", "inline");
   });
});//This is the closure for my document ready jquery



// Do Not Edit Above This Line!!!!!!!!!!!!!!!!!!!!!!!!!
