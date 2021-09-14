window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});


var $html = $("html");
 
var page = 1;
var lastPage = 6;

$html.animate({scrollTop:0},10);


$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page >= lastPage) {
			page = lastPage;
			return;
		}
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page <= 1) {
			page = 1;
			return;
		}
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});

$(document).click(function(e){
	var half_screen = screen.height/2;
	var cursorY = e.clientY;

	if(cursorY > half_screen){
		if(page >= lastPage) {
			page = lastPage;
			return;
		}
		page++;
		var posTop = (page-1) * $(window).height();
		console.log("Go down"+page);
	}
	else{
		if(page <= 1) {
			page = 1;
			return;
		}
		page--;
		var posTop = (page-1) * $(window).height();
		console.log("Go up"+page);
	}
	$html.animate({scrollTop : posTop});

});