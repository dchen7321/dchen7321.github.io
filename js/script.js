var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sizeFactor;
var state = [0, 0];
var active = false;
var fadeState = 1;
var fadeAlpha = 0.0;
var timer = 20;
var images = [];
var leadImage;
var clincherImage;
var optimistImage;
var pessimistImage;
var bestQualityImage;
var worstQualityImage;
var mouse = {};
var click = {};
var question1 = "I am a(n)...";
var question2List = ["Spreading memes is my...", "Empathy is my...", "Naive is my...", "Judging is my...", "Stumbling girls is my...",  "Emotional is my...", "Being low-key is my...", "Realistic is my...", "Influencing is my...", "Layered is my...", "Adaptable is my...", "Disciplined is my...", "Weird is my..."];
var op = [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0];


function CanvasImage(imageID, position, isButton) {
	this.img = document.getElementById(imageID);
	this.aspectRatio = this.img.width / this.img.height;
	this.h = sizeFactor;
	this.w = this.h * this.aspectRatio;
	this.position = position;
	this.resize = 0;
	this.alpha = 1.0;
	this.mouseOver = false;
	this.isButton = isButton;


	this.updatePosition = function() {
		// portrait positions
		if(position == 1) {
			this.absolutex = this.w / 2;
			this.absolutey = this.h / 2;
		}
		// fullscreen positions
		if(position == 2) {
			this.absolutex = canvas.width / 2;
			this.absolutey = canvas.height / 2;
		}
		// top answer position
		if(position == 3) {
			this.absolutex = canvas.width / 2 + 150;
			this.absolutey = canvas.height / 2;
            this.h = 36;
            this.w = this.h * this.aspectRatio;
		}
		// bottom answer position
		if(position == 4) {
			this.absolutex = canvas.width / 2 + 150; 
			this.absolutey = canvas.height / 2 + 150;
            this.h = 36;
            this.w = this.h * this.aspectRatio;
		}/*
		if(position == 5) {
			this.absolutex = canvas.width - 50;
			this.absolutey = canvas.height / 2 - 10;
			this.h = 520;
			this.w = this.h * this.aspectRatio;
	
		if(position == 6) {
			this.absolutex = 50;
			this.absolutey = canvas.height / 2 - 10;	
			this.h = 520;
			this.w = this.h * this.aspectRatio;
		}*/
		this.x = this.absolutex - (this.w / 2);
		this.y = this.absolutey - (this.h / 2);
	}

	this.updatePosition();

	this.resizeUpdate = function() {
		this.h = sizeFactor + this.resize
		this.w = this.h * this.aspectRatio;
        console.log(this.h);
		this.updatePosition();
	}

	this.mouseOverUpdate = function() {
        if(this.isButton) {
            if(mouse.x > this.absolutex - (this.w / 2) &&
               mouse.x < this.absolutex + (this.w / 2) && 
               mouse.y > this.absolutey - (this.h / 2) &&
               mouse.y < this.absolutey + (this.h / 2)) {
                this.mouseOver = true;
                if(this.resize < 40) {
                    console.log(4)
                    this.resize += 4;
                    this.resizeUpdate();
                }
            }
            else if(this.resize > 0) {
                this.mouseOver = false;
                this.resize -= 2;
                this.resizeUpdate();
            }
            else {
                this.mouseOver = false;
            }
        }
    }

	this.clickUpdate = function() {
		if(this.mouseOver && reset) {
			quizState = x;
			tryText = "try";
		}
		else if(this.mouseOver && quizState < 7) {
			quizResult = [quizState * 2, quizState * 2 + 1];
			quizState = x;
			this.mouseOver = false;
		}
		else if(this.mouseOver) {
		}
	}
}

document.addEventListener("click", function(x) {
	click.x = x.pageX;
	click.y = x.pageY;
	clickUpdate();
}, false);

function clickUpdate() {
    switch(state[0]) {
        case 0:
            update0(1);
            break;
        case 1:
            update1(1);
            break;
        case 2:
            update2(1);
            break;
        case 3:
            update3(1);
            break;
        case 4:
            update4(1);
            break;
        case 5:
            update5(1);
            break;
        case 6:
            update6(1);
            break;
        case 7:
            update7(1);
            break;
        case 8:
            update8(1);
            break;
        case 9:
            update9(1);
            break;
        case 10:
            update10(1);
            break;
        case 11:
            update11(1);
            break;
        case 12:
            update12(1);
            break;
        case 13:
            update13(1);
            break;
        case 14:
            update14(1);
            break;
        case 15:
            update15(1);
            break;
        default:
            console.log("invalid state");
    }
}

document.addEventListener("mousemove", function(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}, false);

window.addEventListener("resize", handleResize);
function handleResize() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var wRatio = w / canvas.width;
    canvas.width = w;
    canvas.height = h;
    sizeFactor = canvas.height;
    leadImage.resizeUpdate();
    clincherImage.resizeUpdate();
    optimistImage.resizeUpdate();
    pessimistImage.resizeUpdate();
    bestQualityImage.resizeUpdate();
    worstQualityImage.resizeUpdate();
    for(i=0; i<13; i++) {
    	images[i].resizeUpdate();
    }
    ctx.globalAlpha = fadeAlpha;
    update()
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	switch(state[0]) {
		case 0:
			update0(0);
			break;
		case 1:
			update1(0);
			break;
		case 2:
			update2(0);
			break;
		case 3:
			update3(0);
			break;
		case 4:
			update4(0);
			break;
		case 5:
			update5(0);
			break;
		case 6:
			update6(0);
			break;
		case 7:
			update7(0);
			break;
		case 8:
			update8(0);
			break;
		case 9:
			update9(0);
			break;
		case 10:
			update10(0);
			break;
		case 11:
			update11(0);
			break;
		case 12:
			update12(0);
			break;
		case 13:
			update13(0);
			break;
		case 14:
			update14(0);
			break;
		case 15:
			update15(0);
			break;
		default:
			console.log("invalid state");
	}

}

function update0(input) {
    if(input == 0) {
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 0;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(leadImage.img, leadImage.x, leadImage.y, leadImage.w, leadImage.h);
        }
        else if(fadeState == 2) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [1, 0];
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(leadImage.img, leadImage.x, leadImage.y, leadImage.w, leadImage.h);
        }
        else {
            ctx.drawImage(leadImage.img, leadImage.x, leadImage.y, leadImage.w, leadImage.h);
        }
    }
    else if(input == 1) {
        if(active) {
            fadeState = 2;
            active = false;
        }
    }
}

function update1(input) {
    if(input == 0) {
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 0;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(images[0].img, images[0].x, images[0].y, images[0].w, images[0].h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        else if(fadeState == 2) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [1, 0];
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(images[0].img, images[0].x, images[0].y, images[0].w, images[0].h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        else {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(images[0].img, images[0].x, images[0].y, images[0].w, images[0].h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
    }
    else if(input == 1) {
        if(active) {
            fadeState = 2;
            active = false;
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////

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

	for(i=0; i<13; i++) {
		images[i] = new CanvasImage("image" + (i + 1), 1, false);
	}

	leadImage = new CanvasImage("lead", 2, false);
	clincherImage = new CanvasImage("clincher", 2, false)
	optimistImage = new CanvasImage("optimist", 3, true);
	pessimistImage = new CanvasImage("pessimist", 4, true);
	bestQualityImage = new CanvasImage("best quality", 3, true);
	worstQualityImage = new CanvasImage("worst quality", 4, true);
    ctx.font = "50px Above";
    ctx.textAlign = "center";

	handleResize();

	(function animloop(){
		requestAnimFrame(animloop);
		update();
	})();
};