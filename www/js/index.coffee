onBodyReady = () ->
	stepTemplate = _.template($('#stepTemplate').html());
	windowHeight = window.innerHeight
	introHeight = windowHeight - 400 - 72;
	if introHeight < 200
		introHeight = 200
	$('#intro').css({'height':introHeight+"px"})
	$('#createPlan').bind('click', () -> 
		aStep = stepTemplate()
		$('#mainFrame').append(aStep)
		$('body').animate(
			backgroundColor:"#000000"
			scrollTop: '+=' + 500 + 'px'
			specialEasing:
				scrollTop: 'easeOutBounce',
				backgroundColor: 'easeOutBounce'
			, 1000)
	)
		
$ -> 
	onBodyReady()

$(window).resize(()->onBodyReady())
