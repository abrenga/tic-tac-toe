

var isX = true


$(document).ready(function () {
    $(".box").click(function () {
        isX = !isX;

        if (isX) {
            $(".box").text("X");
        } else {
            $(".box").text("O");
        }
    });

});