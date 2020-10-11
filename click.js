$(".card").hover(
  function () {
    $(this).css({
      transform: "scale(1.02)",
      cursor: "pointer",
    });
  },
  function () {
    $(this).css("transform", "");
  }
);
