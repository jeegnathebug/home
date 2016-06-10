!function(e) {

	// Loading screen
	function load(e,o) {
		current_progress = ++counter / max,
		TweenLite.to(timeline,.7,{progress:current_progress,ease:Linear.easeNone});
	}

	function round() {
		num=Math.round(100*timeline.progress()), e(".txt-perc").text(num+"%");
	}

	function finished() {
		var timeline = new TimelineMax;
		return timeline.to(e(".progress"),.3,
		{
			y:100,
			alpha:0,
			ease:Back.easeIn
		}).to(e(".txt-perc"),.3,
		{
			y:100,
			alpha:0,
			ease:Back.easeIn
		},.2).set(e("body"),
		{
			className:"-=is-loading"
		}).to(e("#preloader"),.7,
		{
			yPercent:100,
			alpha:0
		})
	}

	var	counter = 0,
		max = e("#intro").length,
		current_progress = 0;

	e(".picture").imagesLoaded().progress(load);

	var timeline = new TimelineMax({paused:!0,onUpdate:round,onComplete:finished});
	timeline.to(e(".progress span"), 1, {width:100,ease:Linear.easeNone});

	// Slide effect
	var scroller = new ScrollMagic.Controller,
	sections=["#contact-info","#tech-skills","#work-exp", "#ed-bg", "#prev-work", "#personal-info"];

	if(!Modernizr.touch){
		sections.forEach(
			function(t,r){
				var sections=e(t).attr("id");
				new ScrollMagic.Scene({triggerElement:t,triggerHook:.75}).setClassToggle("#"+sections,"is-active").addTo(scroller)
			});
		var a=new TimelineMax;
		a.to(e("#intro header, #intro section"), .2, {autoAlpha:0,ease:Power1.easeNone}).to(e("#intro"), 1.4, {y:"20%", ease:Power1.easeOut},"-=0.2");
		{
			new ScrollMagic.Scene({triggerElement:"#intro",triggerHook:0,duration:"100%"}).setTween(a).addTo(scroller)
		}
	}
}(jQuery);
