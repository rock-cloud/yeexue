onBodyReady = () ->
	stepTemplate = _.template($('#stepTemplate').html())
	windowHeight = window.innerHeight
	introHeight = windowHeight - 400 - 72
	if introHeight < 200
		introHeight = 200
	$('#intro').css({'height':introHeight+"px"})
	$('#createPlan').bind('click', () -> 
        $('#step1').css("height","500px")
        $('body').animate(
			backgroundColor:"#000000"
			scrollTop: '+=' + 500 + 'px'
			specialEasing:
				scrollTop: 'easeOutBounce',
				backgroundColor: 'easeOutBounce'
			, 500)
	)
$ -> 
	onBodyReady()

$(window).resize(()->onBodyReady())
