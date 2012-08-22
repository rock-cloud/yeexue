onBodyReady = () ->
	windowHeight = window.innerHeight
	introHeight = windowHeight - 400 - 72;
	if introHeight < 200
		introHeight = 200
	$('#intro').css({'height':introHeight+"px"})
	
$ -> 
	onBodyReady()

$(window).resize(()->onBodyReady())
