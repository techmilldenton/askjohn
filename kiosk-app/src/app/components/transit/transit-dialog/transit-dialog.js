let iframeHeight = $(window).height();

$("#ifrm").css({
  height: iframeHeight - 54
});

var refreshIframe = function() {
  $("#ifrm").attr("src", $("#ifrm").attr("src"));
  $("#ifrm").load(function() {
    $("#ifrm")
      .stop()
      .animate(
        {
          opacity: 1
        },
        1000,
        "swing"
      );
  });
};

function loadIframe(iframeName, url) {
  const $iframe = $("#" + iframeName);
  if ($iframe.length) {
    $iframe.attr("src", url); // here you can change src
    return false;
  }
  return true;
}

$("#mobile").click(function() {
  $("#ifrm")
    .stop()
    .animate(
      {
        width: 480,
        opacity: 0.3
      },
      1000,
      "swing",
      function() {
        refreshIframe();
      }
    );
});

$("#tablet").click(function() {
  $("#ifrm")
    .stop()
    .animate(
      {
        width: 1024,
        opacity: 0.3
      },
      1000,
      "swing",
      function() {
        refreshIframe();
      }
    );
});

$("#desktop").click(function() {
  $("#ifrm")
    .stop()
    .animate(
      {
        width: "100%",
        opacity: 0.3
      },
      1000,
      "swing",
      function() {
        refreshIframe();
      }
    );
});