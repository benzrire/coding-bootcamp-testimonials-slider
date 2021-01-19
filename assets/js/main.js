$(function () {
  $(".sc-carousel .cards").slick({
    arrows: true,
    appendArrows: $(".sc-carousel .cards .card .image .action"),
    fade: true,
    speed: 600
  });

  $(".sc-carousel .cards .card .action .slick-prev").click(function (e) {
    e.preventDefault();

    $(this).parents(".cards").slick("prev");
  });

  $(".sc-carousel .cards .card .action .slick-next").click(function (e) {
    e.preventDefault();

    $(this).parents(".cards").slick("next");
  });
});