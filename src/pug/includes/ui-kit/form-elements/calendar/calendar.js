// $(function(){
//     $('select').styler();
// });

$(function () {
  $("#dom-id").dateRangePicker({
    separator: " to ",
    getValue: function () {
      if ($("#date-range200").val() && $("#date-range201").val())
        return $("#date-range200").val() + " to " + $("#date-range201").val();
      else return "";
    },
    setValue: function (s, s1, s2) {
      $(".apply-btn").val("Применить"),
        $(".dsbl-btn").val("Отменить"),
        $("#date-range200").val(s1);
      $("#date-range201").val(s2);
    },
    format: "DD.MM.YYYY",
    startDate: new Date(),
    singleMonth: true,
    showShortcuts: false,
    showTopbar: true,
    startOfWeek: "monday",
    language: "ru",
  });

  $(".drp_top-bar").before($(".month-wrapper"));

  let dsbl = $('<input type="button" class="disable-btn" value="очистить"/>');
  $(".drp_top-bar").append(dsbl);

  $(".disable-btn").on("click", function (evt) {
    evt.stopPropagation();
    $("#dom-id").data("dateRangePicker").clear();
  });
});
