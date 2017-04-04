var canvas = [document.getElementById("canvas1"), 
			  document.getElementById("canvas2"), 
			  document.getElementById("canvas3"), 
			  document.getElementById("canvas4")];
var ctx = [canvas[0].getContext("2d"), 
		   canvas[1].getContext("2d"),
		   canvas[2].getContext("2d"),
		   canvas[3].getContext("2d")];
var images = [new Array(4), new Array(4), new Array(4), new Array(4)];
var keyImage;
var sizeFactor = 100;
var mouse = {};

function CanvasImage(imageID, position) {
	this.img = document.getElementById(imageID);
	this.aspectRatio = this.img.width / this.img.height;
	this.h = sizeFactor;
	this.w = this.h * this.aspectRatio;
	this.position = position;
	this.resize = 0;

	this.updatePosition = function() {
		if(position == 1) {
			this.absolutex = (canvas[0].width / 2);
			this.absolutey = 150;
		}
		if(position == 2) {
			this.absolutex = 400;
			this.absolutey = (canvas[0].height / 2);
		}
		if(position == 3) {
			this.absolutex = canvas[0].width - 400;
			this.absolutey = (canvas[0].height / 2);
		}
		if(position == 4) {
			this.absolutex = (canvas[0].width / 2); 
			this.absolutey = canvas[0].height - 150;
		}
		if(position == 5) {
			this.absolutex = canvas[0].width + 400;
			this.absolutey = 158;
			this.h = 215;
			this.w = this.h * this.aspectRatio;
		}
		this.x = this.absolutex - (this.w / 2);
		this.y = this.absolutey - (this.h / 2);
	}

	this.updatePosition();

	this.resizeUpdate = function() {
		this.h = sizeFactor + this.resize
		this.w = this.h * this.aspectRatio;
		this.updatePosition();
	}

	this.mouseOverUpdate = function() {
		if(mouse.x > this.absolutex - (this.w / 2) &&
			mouse.x < this.absolutex + (this.w / 2) &&
			mouse.y > this.absolutey - (this.h / 2) &&
			mouse.y < this.absolutey + (this.h / 2)) {
			if(this.resize < 30) {
				this.resize += 6;
				this.resizeUpdate();
			}
		}
		else if(this.resize > 0) {
			this.resize--;
			this.resizeUpdate();
		}
	}
}

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
    sizeFactor = sizeFactor * wRatio
    for(i=0; i<4; i++) {
    	for(j=0; j<4; j++) {
    		images[i][j].resizeUpdate();
    	}
    }
}

function update() {
	for(i=0; i<4; i++) {
		ctx[i].clearRect(0, 0, canvas[i].width, canvas[i].height);
		for(j=0; j<4; j++) {
			images[i][j].mouseOverUpdate();
			ctx[i].drawImage(images[i][j].img, images[i][j].x, images[i][j].y, images[i][j].w, images[i][j].h);
		}
		ctx[i].drawImage(keyImage.img, keyImage.x, keyImage.y, keyImage.w, keyImage.h);
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
	for(i=0; i<4; i++) {
		for(j=0; j<4; j++) {
			images[i][j] = new CanvasImage("image" + (i * 4 + j + 1), j + 1);
		}
	}
	keyImage = new CanvasImage("key", 5);
	handleResize();
	(function animloop(){
		requestAnimFrame(animloop);
		update();	
	})();
};