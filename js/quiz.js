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
    var wRatio = w / canvas[0].width;
    for(i=0; i<4; i++) {
    	canvas[i].width = w;
    	canvas[i].height = h;
    }
    //sizeFactor = sizeFactor * wRatio
    for(i=0; i<4; i++) {
    	for(j=0; j<4; j++) {
    		images[i][j].resizeUpdate();
    	}
    }
    keyImage.resizeUpdate();
    ctx[currentIndex].globalAlpha = fadeAlpha;
    for(i=1; i<4; i++) {
    	update(i);
    }
}

function update(input) {
	ctx[input].clearRect(0, 0, canvas[input].width, canvas[input].height);
	if(fadeAlpha < 1.0 && input == currentIndex) {
		fadeAlpha += 0.04;
		ctx[input].globalAlpha = fadeAlpha
	}
	else if(fadeAlpha > 1.0) {
		fadeAlpha = 1.0;
	}

	for(j=0; j<4; j++) {
		images[input][j].mouseOverUpdate();
		ctx[input].drawImage(images[input][j].img, 
							 images[input][j].x, 
							 images[input][j].y, 
							 images[input][j].w, 
							 images[input][j].h);
	}
	ctx[input].drawImage(keyImage.img, keyImage.x, keyImage.y, keyImage.w, keyImage.h);
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
	for(i=0; i<4; i++) {
		for(j=0; j<4; j++) {
			images[i][j] = new CanvasImage("image" + (i * 4 + j + 1), j + 1, "info" + (i * 4 + j + 1));
		}
	}
	keyImage = new CanvasImage("key", 5);
	handleResize();
	(function animloop(){
		requestAnimFrame(animloop);
		update(currentIndex);
	})();
};