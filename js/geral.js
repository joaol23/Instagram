$(".change-page").on("click", function() {
    var page = "." + $(this).attr("id");

    $(page).show();
    $(this).hide();
})