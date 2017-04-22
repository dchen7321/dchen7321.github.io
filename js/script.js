var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var sizeFactor;
var buttonSizeFactor;
var state = [0, 0];
var active = false;
var fadeState = 1;
var fadeAlpha = 0.0;
var timer = 0;
var image;
var leadImage;
var clincherImage;
var optimistImage;
var pessimistImage;
var bestQualityImage;
var worstQualityImage;
var mouse = {};
var question1 = "I am a(n)...";
var question2List = ["Spreading memes is my...", "Empathy is my...", "Naive is my...", "Judging is my...", "Stumbling girls is my...",  "Emotional is my...", "Being low-key is my...", "Realistic is my...", "Influencing is my...", "Layered is my...", "Adaptable is my...", "Disciplined is my...", "Weird is my..."];
var op = [1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0];


function CanvasImage(imageID, position, isButton) {
	this.img = document.getElementById(imageID);
	this.aspectRatio = this.img.width / this.img.height;
	this.position = position;
	this.resize = 0;
	this.alpha = 1.0;
	this.mouseOver = false;
	this.isButton = isButton;
    if(this.isButton) {
        this.h = buttonSizeFactor;
    }
    else {
        this.h = sizeFactor;
    }
    this.w = this.h * this.aspectRatio;

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
		}
		// bottom answer position
		if(position == 4) {
			this.absolutex = canvas.width / 2 + 150; 
			this.absolutey = canvas.height / 2 + 150;
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
        if(this.isButton) {
            this.h = buttonSizeFactor + this.resize
            this.w = this.h * this.aspectRatio;
            this.updatePosition();
        }
        else {
            this.h = sizeFactor + this.resize
            this.w = this.h * this.aspectRatio;
            this.updatePosition();
        }
	}

	this.mouseOverUpdate = function() {
        if(this.isButton) {
            if(mouse.x > this.absolutex - (this.w / 2) &&
               mouse.x < this.absolutex + (this.w / 2) && 
               mouse.y > this.absolutey - (this.h / 2) &&
               mouse.y < this.absolutey + (this.h / 2)) {
                this.mouseOver = true;
                if(this.resize < 20) {
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
		return this.mouseOver;
	}
}

document.addEventListener("click", function(x) {
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
    buttonSizeFactor = 36;
    leadImage.resizeUpdate();
    clincherImage.resizeUpdate();
    optimistImage.resizeUpdate();
    pessimistImage.resizeUpdate();
    bestQualityImage.resizeUpdate();
    worstQualityImage.resizeUpdate();
    image.resizeUpdate();
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
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = 1.0
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[0], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[0], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[0], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[0], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [2, 0]
                image = new CanvasImage("image2", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[0], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update2(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[1], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[1], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[1], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[1], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [3, 0]
                image = new CanvasImage("image3", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[1], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update3(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[2], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[2], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[2], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[2], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [4, 0]
                image = new CanvasImage("image4", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[2], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update4(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[3], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[3], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[3], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[3], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [5, 0]
                image = new CanvasImage("image5", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[3], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update5(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[4], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[4], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[4], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[4], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [6, 0]
                image = new CanvasImage("image6", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[4], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update6(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[5], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[5], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[5], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[5], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [7, 0]
                image = new CanvasImage("image7", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[5], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update7(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[6], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[6], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[6], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[6], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [8, 0]
                image = new CanvasImage("image8", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[6], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update8(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[7], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[7], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[7], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[7], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [9, 0]
                image = new CanvasImage("image9", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[7], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update9(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[8], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[8], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[8], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[8], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [10, 0]
                image = new CanvasImage("image10", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[8], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update10(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[9], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[9], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[9], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[9], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [11, 0]
                image = new CanvasImage("image11", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[9], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update11(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[10], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[10], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[10], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[10], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [12, 0]
                image = new CanvasImage("image12", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[10], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update12(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[11], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[11], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[11], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[11], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [13, 0]
                image = new CanvasImage("image13", 1, false);
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[11], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
        }
    }
}

function update13(input) {
    if(input == 0) {
        //fade in everything
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 2;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw everything
        else if(fadeState == 2) {
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect op
        else if(fadeState == 3) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 4;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 100) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            console.log(timer)
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 6;
            }
            optimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
        //fade in new text
        else if(fadeState == 6) {
            if(fadeAlpha < 1) {
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
                fadeState = 7;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[12], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //draw eveything
        else if(fadeState == 7) {
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[12], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 9;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[12], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 100) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[12], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.0;
                fadeState = 1;
                state = [14, 0]
            }
            bestQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[12], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
        }
    }
    else if(input == 1) {
        if(fadeState == 2) {
            if(optimistImage.mouseOver || pessimistImage.mouseOver) {
                fadeState = 3;
            }
        }
        else if(fadeState == 7) {
            if(bestQualityImage.mouseOver || worstQualityImage.mouseOver) {
                fadeState = 8;
            }
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

	image = new CanvasImage("image1", 1, false);

	leadImage = new CanvasImage("lead", 2, false);
	clincherImage = new CanvasImage("clincher", 2, false)
	optimistImage = new CanvasImage("optimist", 3, true);
	pessimistImage = new CanvasImage("pessimist", 4, true);
	bestQualityImage = new CanvasImage("best quality", 3, true);
	worstQualityImage = new CanvasImage("worst quality", 4, true);

	handleResize();

	(function animloop(){
		requestAnimFrame(animloop);
		update();
	})();
};