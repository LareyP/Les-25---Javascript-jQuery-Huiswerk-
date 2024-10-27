$(document).ready(function () {

    $("#taak").keydown(function (event) {

        if (event.keyCode === 13) {

            var nieuweTaak = $(this).val();

            $("#taken").append("<li>" + nieuweTaak + "</li>");

            $(this).val("");

        }

    });


    $("#toevoegen").click(function () {

        var nieuweTaak = $("#taak").val();

        $("#taken").append("<li>" + nieuweTaak + "</li>");

        $("#taak").val("");

    });


    $("#leegmaken").click(function () {

        $("#taken").empty();

    });

});