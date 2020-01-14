$(document).ready(function() {
  $("button#darkBtn").click(function() {
    $("body").removeClass();
    $("body").addClass("darkMode");
  });
  $("button#lightBtn").click(function(){
    $("body").removeClass();
    $("body").addClass("lightmode");
  
  });
});