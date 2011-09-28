$(document).ready(function() {
	$('#header').localScroll();
	
	var flickr = new Galleria.Flickr();
	flickr.user('67870114@N05', function(data) {
	    $('#gallery').galleria({
	        dataSource: data
	    });
	});
});


