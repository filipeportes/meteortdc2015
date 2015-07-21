Template.Layout.rendered = function () {

    $(document).on('keyup', function (e) {
        if (e.keyCode === 37) {
            goToPrevSlide();
        }
        if (e.keyCode === 39) {
            goToNextSlide();

        }
    });
}

Template.Layout.helpers({
    myGestures: {
        'swiperight #slide': function (event, templateInstance) {
            console.log("swipe right");
        },
        'swipeleft #slide': function (event, templateInstance) {
            console.log("swipe left");
        }
    }
});

goToNextSlide = function () {
    console.log("event next ok");
    $("#slide").animate({opacity: '0'}, "slow", function () {
        $("#slide").css('opacity', '1');
        FlowRouter.go('/' + nextSlide());
    });
}

goToPrevSlide = function () {
    console.log("event prev ok");
    $("#slide").animate({opacity: '0'}, "slow", function () {
        $("#slide").css('opacity', '1');
        FlowRouter.go('/' + prevSlide());
    });
}