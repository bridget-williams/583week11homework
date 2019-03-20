(function (){

    var tl1 = new TimelineMax ();

tl1.to('#myAd', .4, {opacity: 1})
    .from('#myAd_text2', 1.3, { top: -100,  ease: Power2.easeOut})
    .to( '#ltr01', 2, { top: 210,  left: -70, rotation: -100, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr02', 2, { top: 210,  left: -60, rotation: 35, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr03', 2, { top: 210,  left: -50, rotation: 500, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr04', 2, { top: 210,  left: -40, rotation: -180, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr05', 2, { top: 210,  left: -30, rotation: 52, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr06', 2, { top: 210,  left: -20, rotation: 90, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr07', 2, { top: 210,  left: -10, rotation: -200, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr08', 2, { top: 210,  left: 0, rotation: -84, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr09', 2, { top: 210,  left: 10, rotation: 31, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr10', 2, { top: 210,  left: 20, rotation: -52, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr11', 2, { top: 210,  left: 30, rotation: -90, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr12', 2, { top: 210,  left: 40, rotation: 76, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr13', 2, { top: 210,  left: 50, rotation: -76, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr14', 2, { top: 210,  left: 60, rotation: -2, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr15', 2, { top: 210,  left: 70, rotation: -253, ease: Power2.easeOut}, ' ltr-=.9')
    .to( '#ltr16', 2, { top: 210,  left: 80, rotation: 312, ease: Power2.easeOut}, ' ltr-=.9')
    .from('#marker', 1.2, {top: -110, ease: Bounce.easeOut}, '-=.5')
    .from('#shadow', 1.2, {opacity: 0, ease: Bounce.easeOut}, '-=1.2')
    .from('myAd_text3', 1.2, {scale: .2, opacity: 0, ease: Power2.easeOut}, '-=.9')
    .from('#surfboard', 1.3, {top: 300, rotation: -130, left: 300, ease: Back.easeOut}, 'cta')
    ;

// tl1.seek('cta');

    var tl2 = new TimelineMax ({repeat: -1});
    tl2.to('#myCloud', 65, {backgroundPositionX: 649, ease: Power0.easeOut})

}());