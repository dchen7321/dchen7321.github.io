var canvas = [document.getElementById("canvas1"), 
			  document.getElementById("canvas2"), 
			  document.getElementById("canvas3"), 
			  document.getElementById("canvas4")];
var ctx = [canvas[0].getContext("2d"), 
		   canvas[1].getContext("2d"),
		   canvas[2].getContext("2d"),
		   canvas[3].getContext("2d")];
var currentIndex = 0;
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
			if(this.resize < 40) {
				this.resize += 8;
				this.resizeUpdate();
			}
		}
		else if(this.resize > 0) {
			this.resize -= 2;
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
    keyImage.resizeUpdate();
}

function update(input) {
	ctx[input].clearRect(0, 0, canvas[input].width, canvas[input].height);
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
			images[i][j] = new CanvasImage("image" + (i * 4 + j + 1), j + 1);
		}
	}
	keyImage = new CanvasImage("key", 5);
	handleResize();
	for(i=0; i<4; i++) {
		update(i);
	}
	(function animloop(){
		requestAnimFrame(animloop);
		update(currentIndex);	
	})();
};

$('.carousel').on('slid.bs.carousel', function () {

  // This variable contains all kinds of data and methods related to the carousel
  var carouselData = $(this).data('bs.carousel');
  // EDIT: Doesn't work in Boostrap >= 3.2
  //var currentIndex = carouselData.getActiveIndex();
  currentIndex = carouselData.getItemIndex(carouselData.$element.find('.item.active'));
  var total = carouselData.$items.length;
  // Create the text we want to display.
  // We increment the index because humans don't count like machines
  var text = (currentIndex + 1) + " of " + total;

  // You have to create a HTML element <div id="carousel-index"></div>
  // under your carousel to make this work
  $('#carousel-index').text(text);
});