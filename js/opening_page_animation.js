window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});

var $html = $("html");
var page = 1;
var lastPage = 2;
 
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
	var quater_screen = screen.height/4;
	var cursorY = e.clientY;

	if(cursorY > quater_screen){
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

function getName()  {
	var name = document.getElementById('username').value;
	localStorage.setItem('username', name);
	//document.getElementById("result").innerText = name;
	console.log(localStorage.getItem('username'))
}

function checkName(){
	var name = document.getElementById('username').value;
	if(name==""){
		alert("이름(별명)을 입력해주세요.");
	}
	else{
		window.location.href = "./free_job_change2.html"
	}
}