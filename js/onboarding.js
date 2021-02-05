document.querySelector(".container-btn-onb-netx").style.display = "none";

$(document).ready(function () {
  // activar o pausar el carousel
  $("#demo").carousel({ pause: true });

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#demo").carousel(0);
  });
  $(".item2").click(function () {
    $("#demo").carousel(1);
  });
  $(".item3").click(function () {
    $("#demo").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#demo").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#demo").carousel("next");
  });

  $("#demo").on("slide.bs.carousel", function (event) {
    // alert("The index number from where I came from: " + event.from);
    if (event.to === 0) $(".btn_onboarding").css("display", "block");
    else $(".btn_onboarding").css("display", "none");
    if (event.to === 2) $(".container-btn-onb-netx").css("display", "block");
    else $(".container-btn-onb-netx").css("display", "none");
  });
});
