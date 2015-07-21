Template.Layout.rendered = function() {
    $(document).on('keyup', function (e) {
        if(e.keyCode === 37){
            console.log("event prev ok");
            $("#slide").animate({opacity: '0'}, "slow", function() {
                console.log("complete")
                $("#slide").css('opacity', '1');
                FlowRouter.go('/'+prevSlide());
            });
        }
        if(e.keyCode === 39){
            console.log("event next ok");
            $("#slide").animate({opacity: '0'}, "slow", function() {
                console.log("complete")
                $("#slide").css('opacity', '1');
                FlowRouter.go('/'+nextSlide());
            });

        }
    });
}