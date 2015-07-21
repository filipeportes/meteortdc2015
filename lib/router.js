FlowRouter.route('/',{
    action: function(params) {
        FlowLayout.render('Layout', { main: slides[getSlide()] });
    }
});

FlowRouter.route('/home',{
    action: function(params) {
        setSlide(0);
        FlowLayout.render('Layout', { main: slides[0] });
    }
});

FlowRouter.route('/:slideId',{
    action: function(params) {
        setSlide(params.slideId);
        FlowLayout.render('Layout', { main: slides[params.slideId] });
    }
});
