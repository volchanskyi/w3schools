/**
 * Created by Ivan on 2/8/2017.
 */
$(document).ready(function () {
    $("#testJQ").click(function () {
    $(this).hide();
    });
});



$(document).ready(function () {
    $("#button").click(function () {
        $("#testJQ").hide();
    });
});



$(document).ready(function () {
    $(".button").click(function () {
        $(".testJQ").hide();
    });
});

