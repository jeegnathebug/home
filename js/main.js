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

	var	counter = 0;
	var max = e(".intro").length;
	var current_progress = 0;

	e(".picture").imagesLoaded().progress(load);

	var timeline = new TimelineMax({paused:!0,onUpdate:round,onComplete:finished});
	timeline.to(e(".progress span"), 1, {width:100,ease:Linear.easeNone});
}(jQuery);
