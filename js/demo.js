$(document).ready(function() {
    $("#butt1").button().click(function() {
        var val = $("#inpt").val();
        if (val === "xxyyxx") {
            location.href ="http://xxyyxx.bandcamp.com/";
        }
        if (val === "boss") {
            location.href="http://nohomo.sx";
        }
        if (val === "ILuvDP") {
            location.href="http://www.dpdough.com";
        }
    });
});
