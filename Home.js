$(document).ready(function () {
    $("#homeul").click(function(){
        var iframe = $("iframe");
        iframe.animate({height: '60%', opacity: '0.4'}, "slow");
        iframe.animate({width: '49.7%', opacity: '0.8'}, "slow");
    })
});