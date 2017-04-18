var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");
var sizeFactor = 110;
var mouse = {};
var questionList = ["Are you a vegetarian?", "Are you feeling adventurous?", "Do you like shellfish?", "Want something traditional?", "Do you love pork?", "Want something sweet?", "Still hungry for dessert?"];
var quizState = 0;
var fadeAlpha = 0;

document.addEventListener("mousemove", function(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}, false);

window.addEventListener("resize", handleResize);
function handleResize() {
    var w = window.innerWidth-2; // -2 accounts for the border
    var h = window.innerHeight-2;
    var wRatio = w / canvas.width;
    canvas.width = w;
    canvas.height = h;
    //sizeFactor = sizeFactor * wRatio
    /*
    for(i=0; i<4; i++) {
    	for(j=0; j<4; j++) {
    		images[i][j].resizeUpdate();
    	}
    }
    */
    ctx.globalAlpha = fadeAlpha;
    update()
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if(fadeAlpha < 1.0) {
		fadeAlpha += 0.02;
		ctx.globalAlpha = fadeAlpha
	}
	else if(fadeAlpha > 1.0) {
		fadeAlpha = 1.0;
	}

	if(quizState < 8) {
		ctx.font = "50px Century Gothic";
		ctx.textAlign = "center";
		ctx.fillText(questionList[quizState], canvas.width/2, canvas.height/2 - 150)
	}

}

window.requestAnimFrame = (function(){
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame || 
	window.mozRequestAnimationFrame    || 
	window.oRequestAnimationFrame      || 
	window.msRequestAnimationFrame     || 
	function( callback ){
		window.setTimeout(callback, 1000 / 60);
	};
})();

window.onload = function() {
	/*
	for(i=0; i<4; i++) {
		for(j=0; j<4; j++) {
			images[i][j] = new CanvasImage("image" + (i * 4 + j + 1), j + 1, "info" + (i * 4 + j + 1));
		}
	}
	*/
	handleResize();
	(function animloop(){
		requestAnimFrame(animloop);
		update();
	})();
};