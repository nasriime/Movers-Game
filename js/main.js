$(document).ready(function() {
    var score = 0;
    var circlesRemaining = 4;
    var clicksRemaining = 10;
    var remaining = true;

    $("body").click(function() {
        if (clicksRemaining > 0 && remaining == true) {
            clicksRemaining--;
            $('label#clicks-remaining span').text(clicksRemaining);
        }
        if (clicksRemaining == 0 && circlesRemaining > 0) {
            $("h2.lose").fadeIn();
            $("div.lvl-1-circle").fadeOut();
            $(".lvl-2").fadeOut();
        }

    });

    $('div.lvl-1-circle').click(function() {
        $(this).remove();
        score += 2;
        circlesRemaining--;
        $("label#score span").text(score);
        $('label#remaining span').text(circlesRemaining);

        if (score == 8) {
            $(".lvl-1-win").fadeIn();
            remaining = false;
        } else if (score == 24) {
            $(".lvl-2-win").fadeIn();
            remaining = false;
        }
    });

    $('div.lvl-2-circle').click(function() {
        $(this).remove();
        score += 2;
        circlesRemaining--;
        $("label#score span").text(score);
        $('label#remaining span').text(circlesRemaining);

         if (score == 24) {
            $(".lvl-2-win").fadeIn();
            remaining = false;
        }
    });

    $(".lvl-1-win span").click(function() {
        $(".lvl-1-win").hide();
        $(".lvl-2").fadeIn();
        remaining = true;
        circlesRemaining = 4;
        $('label#remaining span').text(circlesRemaining);
        lvlTwo();
    });

    function lvlOne() {
        var min = -50;
        var max = 100;
        var random1;
        var random2;

        setInterval(function() {
            var element = $("div.lvl-1-circle");
            for (var i = 0; i < element.length; i++) {
                random1 = Math.floor(Math.random() * (max - min + 1) + min);
                random2 = Math.floor(Math.random() * (max - min + 1) + min);
                element.eq(i).animate({
                    "left": random1 + "%",
                    "top": random2 + "%"
                }, 1500);
            }
        }, 0)
    }

    lvlOne();

    function lvlTwo() {
        var min = -50;
        var max = 100;
        var random1;
        var random2;

        setInterval(function() {
            var element = $("div.lvl-2-circle");
            for (var i = 0; i < element.length; i++) {
                random1 = Math.floor(Math.random() * (max - min + 1) + min);
                random2 = Math.floor(Math.random() * (max - min + 1) + min);
                element.eq(i).animate({
                    "left": random1 + "%",
                    "top": random2 + "%"
                }, 1500);
            }
        }, 0)
    }
});
