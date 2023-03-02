$(document).ready(function() {
  hsize = $(window).height(),
  $("#main_visual").css("height", hsize + "px"),
  $("#main_visual .inner_wrap").css("height", hsize + "px")
}),
$(window).resize(function() {
  hsize = $(window).height(),
  $("#main_visual").css("height", hsize + "px"),
  $("#main_visual .inner_wrap").css("height", hsize + "px")
}),
$(document).ready(function() {
  $(".btn_skip").click(function() {
      $("#anim").fadeOut(1e3, "linear"),
      $("body").css("overflow-y", "visible")
  })
}),
$(window).on("load", function() {
  $(".chara_crom,.chara_sarry,.chara_maple,.chara_kasumi,.chara_iz").each(function() {
      $(this).addClass("active")
  })
});
