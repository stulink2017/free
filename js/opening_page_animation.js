window.addEventListener("wheel", function(e){
	e.preventDefault();
},{passive : false});


var $html = $("html");
 
var page = 1;
 
var lastPage = $(".content").length;
 
$html.animate({scrollTop:0},10);


$(window).on("wheel", function(e){
 
	if($html.is(":animated")) return;
 
	if(e.originalEvent.deltaY > 0){
		if(page== lastPage) return;
 
		page++;
	}else if(e.originalEvent.deltaY < 0){
		if(page == 1) return;
 
		page--;
	}
	var posTop = (page-1) * $(window).height();
 
	$html.animate({scrollTop : posTop});
 
});

$(document).click(function(){
    window.scrollTo({top:document.body.scrollHeight, left:0, behavior:'smooth'});
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