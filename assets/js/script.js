$(function () {
    let filter = $("[data-filter]");

    filter.on("click", function (event) {
        event.preventDefault();

        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault(); //Отменяем действие кнопки

        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        $("html, body").animate({
                scrollTop: blockOffset + 1
            },
            1000
        );
    });

});
//check input
$("#btn_send").on("click", function (event) {
    if ($("#name").val() == ''){
        $("#name").addClass("input__item_error")
        setTimeout(()=> $("#name").removeClass("input__item_error"), 2000)
    }

    if ($("#email").val() == ''){
        $("#email").addClass("input__item_error")
        setTimeout(()=> $("#email").removeClass("input__item_error",1000), 2000)
    }
});