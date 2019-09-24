$(document).ready(function() {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
        $("#menu").addClass("scrolled");
      } else {
        $("#menu").removeClass("scrolled");
      }
    });
});

function openmobmenu() {
    var x = document.getElementById("menu-link");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function openPopup() {
  $("#popup").addClass("openpopup");
}

function closePopup() {
  $("#popup").removeClass("openpopup");
}

function theToggle() {
    if ($("#toggle").hasClass("on")) {
      $("#toggle").removeClass("on");
      openmobmenu();
    } else {
      $("#toggle").addClass("on");
      openmobmenu();
    }
}