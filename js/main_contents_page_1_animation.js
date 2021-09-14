$(".hidden").hide()

//console.log('main_1')
//console.log(localStorage.getItem('username'))
printName()

var numClick = 0;

$(document).click(function(){
    numClick++;
    //console.log(numClick);
    var order = ".show"+numClick;
    //console.log(order);
    $(order).fadeIn();
    printName();
});

function printName()  {
	let name = localStorage.getItem('username');
    let nameslots = document.getElementsByClassName("username");
    for(var i=0; i<nameslots.length; i++){
        var slot = nameslots.item(i);
        slot.innerHTML = name;
    }
}