slides = ["home", "community", "intro", "sevenprinciples", "database", "reactivity", "mobile", "hacksinapse", "sorteio", "doubts" ];

getSlide = function (){
    var slide = Session.get("slide");
    if(!slide){
        slide = 0
        setSlide(slide);
    }
    return slide;
}

setSlide = function(slide){
    Session.set("slide", slide);
}

nextSlide = function(){
    var slide = getSlide();
    if(slide < slides.length - 1) {
        setSlide(slide++);
    }
    return slide;
}

prevSlide = function(){
    var slide = getSlide();
    if(slide > 0) {
        setSlide(slide--);
    }
    return slide;
}