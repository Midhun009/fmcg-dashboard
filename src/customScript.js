import $ from 'jquery'; // Make sure jQuery is installed

(function () {
  "use strict";
  var e,
    t = localStorage.getItem("language"),
    s = "en";

  function n(e) {
    const langImg = document.getElementById("header-lang-img");
    if (langImg) {
      switch (e) {
        case "en":
          langImg.src = "assets/images/flags/us.jpg";
          break;
        case "sp":
          langImg.src = "assets/images/flags/spain.jpg";
          break;
        case "gr":
          langImg.src = "assets/images/flags/germany.jpg";
          break;
        case "it":
          langImg.src = "assets/images/flags/italy.jpg";
          break;
        case "ru":
          langImg.src = "assets/images/flags/russia.jpg";
          break;
      }
      localStorage.setItem("language", e);
      t = localStorage.getItem("language") || s;
      $.getJSON(`assets/lang/${t}.json`, function (e) {
        $("html").attr("lang", t);
        $.each(e, function (e, t) {
          if (e === "head") {
            $(document).attr("title", t.title);
          }
          $(`[key='${e}']`).text(t);
        });
      });
    }
  }

  // Other functions (c, r, o, etc.) remain unchanged

  $(document).ready(function () {
    $("#side-menu").metisMenu();
    // Your other initialization code...
  });

  // Initialize functionality that requires jQuery
})();
