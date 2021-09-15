window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = 6;

$html.animate({scrollTop:0},10);

update_guide_message();

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

function update_guide_message() { 
	var guide_msg_slot = document.getElementsByClassName("guide");
	console.log(guide_msg_slot);

	try { 
		document.createEvent("TouchEvent"); 
		//
		guide_msg_slot.item(0).innerHTML = "&#x25BD;아래, 위를 터치해주세요&#x25BD;";
		console.log("MOBILE");
		return true; 
	} catch (e) { 
		guide_msg_slot.item(0).innerHTML = "&#x25BD;스크롤을 내리면서 읽어주세요&#x25BD;";
		console.log("PC")
		return false; 
	} 
};

