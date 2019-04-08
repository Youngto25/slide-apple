let $buttons = $("#nav>button");
let $images = $("#slide");

$buttons.eq(0).on("click", function() {
  $images.css({ transform: "translateX(0px)" });
  let $div = $("#nav div");
  for (let i = 0; i < $div.length; i++) {
    $div[i].classList.remove("active");
  }
  $("#triangle1").addClass("active");
});
$buttons.eq(1).on("click", function() {
  $images.css({ transform: "translateX(-980px)" });
  let $div = $("#nav div");
  for (let i = 0; i < $div.length; i++) {
    $div[i].classList.remove("active");
  }
  $("#triangle2").addClass("active");
});
$buttons.eq(2).on("click", function() {
  $images.css({ transform: "translateX(-1960px)" });
  let $div = $("#nav div");
  for (let i = 0; i < $div.length; i++) {
    $div[i].classList.remove("active");
  }
  $("#triangle3").addClass("active");
});
$buttons.eq(3).on("click", function() {
  $images.css({ transform: "translateX(-2940px)" });
  let $div = $("#nav div");
  for (let i = 0; i < $div.length; i++) {
    $div[i].classList.remove("active");
  }
  $("#triangle4").addClass("active");
});
