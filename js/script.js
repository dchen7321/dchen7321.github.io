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
var question2List = ["Spreading memes is my...", "Empathy is my...", "Naive is my...", "Judging is my...", "Realistic is my...",  "Emotional is my...", "Being low-key is my...", "Realistic is my...", "Influencing is my...", "Emotional is my...", "Adaptable is my...", "Disciplined is my...", "Weird is my..."];
var optimist = [true, true, false, true, true, true, false, false, false, false, true, true, false];
var best = [true, true, false, false, false, false, false, true, false, true, true, false, true];


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
            update1(1, 0);
            break;
        case 2:
            update1(1, 1);
            break;
        case 3:
            update1(1, 2);
            break;
        case 4:
            update1(1, 3);
            break;
        case 5:
            update1(1, 4);
            break;
        case 6:
            update1(1, 5);
            break;
        case 7:
            update1(1, 6);
            break;
        case 8:
            update1(1, 7);
            break;
        case 9:
            update1(1, 8);
            break;
        case 10:
            update1(1, 9);
            break;
        case 11:
            update1(1, 10);
            break;
        case 12:
            update1(1, 11);
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
			update1(0, 0);
			break;
		case 2:
			update1(0, 1);
			break;
		case 3:
			update1(0, 2);
			break;
		case 4:
			update1(0, 3);
			break;
		case 5:
			update1(0, 4);
			break;
		case 6:
			update1(0, 5);
			break;
		case 7:
			update1(0, 6);
			break;
		case 8:
			update1(0, 7);
			break;
		case 9:
			update1(0, 8);
			break;
		case 10:
			update1(0, 9);
			break;
		case 11:
			update1(0, 10);
			break;
		case 12:
			update1(0, 11);
			break;
		case 13:
			update13(0);
			break;
		case 14:
			update14(0);
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
                fadeAlpha = 0.001;
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

function update1(input, index) {
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
            bestQualityImage.resize = 0;
            worstQualityImage.resize = 0;
            bestQualityImage.resizeUpdate();
            worstQualityImage.resizeUpdate();
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
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 4;
            }
            else {
                fadeAlpha -= 0.05;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            if(optimist[index]) {
                ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h);
            }
            else {
                ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            }
            ctx.globalAlpha = 1.0;
            if(optimist[index]) {
                ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            }
            else {
                ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h);
            }
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 150) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            if(optimist[index]) {
                ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            }
            else {
                ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h);
            }
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 6;
            }
            else {
                fadeAlpha -= 0.05;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            if(optimist[index]) {
                ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            }
            else {
                ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h);
            }
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
            optimistImage.resize = 0;
            pessimistImage.resize = 0;
            optimistImage.resizeUpdate();
            pessimistImage.resizeUpdate();
            ctx.globalAlpha = 1.0
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h)
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[index], canvas.width/2 + 150, canvas.height/2 - 150);
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
            ctx.fillText(question2List[index], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //fade out incorrect bw
        else if(fadeState == 8) {
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 9;
            }
            else {
                fadeAlpha -= 0.05;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            if(best[index]) {
                ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h);
            }
            else {
                ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            }
            ctx.globalAlpha = 1.0;
            if(best[index]) {
                ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            }
            else {
                ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h);
            }
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[index], canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 9) {
            if(timer == 150) {
                timer = 0;
                fadeState = 10;
                fadeAlpha = 1.0;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            if(best[index]) {
                ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            }
            else {
                ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h);
            }
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[index], canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out everything
        else if(fadeState == 10) {
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 1;
                image = new CanvasImage("image" + (index + 2), 1, false)
                state = [index + 2, 0];
            }
            else {
                fadeAlpha -= 0.05;
            }
            bestQualityImage.mouseOverUpdate();
            worstQualityImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[index], canvas.width/2 + 150, canvas.height/2 - 150);
            if(best[index]) {
                ctx.drawImage(bestQualityImage.img, bestQualityImage.x, bestQualityImage.y, bestQualityImage.w, bestQualityImage.h);
            }
            else {
                ctx.drawImage(worstQualityImage.img, worstQualityImage.x, worstQualityImage.y, worstQualityImage.w, worstQualityImage.h);
            }
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
            bestQualityImage.resize = 0;
            worstQualityImage.resize = 0;
            bestQualityImage.resizeUpdate();
            worstQualityImage.resizeUpdate();
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
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 4;
            }
            else {
                fadeAlpha -= 0.05;
            }
            optimistImage.mouseOverUpdate();
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(optimistImage.img, optimistImage.x, optimistImage.y, optimistImage.w, optimistImage.h);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
        }
        //hold
        else if(fadeState == 4) {
            if(timer == 150) {
                timer = 0;
                fadeState = 5;
                fadeAlpha = 1.0;
            }
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = 1.0;
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            timer ++;
        }
        //fade out other text
        else if(fadeState == 5) {
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 6;
            }
            else {
                fadeAlpha -= 0.05;
            }
            pessimistImage.mouseOverUpdate();
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question1, canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.drawImage(pessimistImage.img, pessimistImage.x, pessimistImage.y, pessimistImage.w, pessimistImage.h)
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
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText(question2List[12], canvas.width/2 + 150, canvas.height/2 - 150);
            ctx.globalAlpha = 1.0;
            ctx.drawImage(image.img, image.x, image.y, image.w, image.h);
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
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 9;
            }
            else {
                fadeAlpha -= 0.05;
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
            if(timer == 150) {
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
            if(fadeAlpha <= 0.05) {
                fadeAlpha = 0;
                fadeState = 1;
                state = [14, 0]
            }
            else {
                fadeAlpha -= 0.05;
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

function update14(input) {
    if(input == 0) {
        if(fadeState == 1) {
            if(fadeAlpha < 1) {
                active = false;
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = true;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText("How different can the world look", canvas.width/2, canvas.height/2 - 150);
            ctx.fillText("through the other half of the glass?", canvas.width/2, canvas.height/2 - 75);
        }
        else if(fadeState == 2) {
            if(fadeAlpha > 0.0) {
                fadeAlpha -= 0.05;
                active = false;
            }
            else if(fadeAlpha <= 0.0) {
                fadeAlpha = 0.001;
                fadeState = 3;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.font = "50px Above";
            ctx.textAlign = "center";
            ctx.fillText("How different can the world look", canvas.width/2, canvas.height/2 - 150);
            ctx.fillText("through the other half of the glass?", canvas.width/2, canvas.height/2 - 75);
        }
        else if(fadeState == 3) {
            if(fadeAlpha < 1) {
                active = false;
                fadeAlpha += 0.04;
            }
            else if(fadeAlpha >= 1.0) {
                fadeAlpha = 1.0;
                active = false;
                fadeState = 0;
            }
            ctx.globalAlpha = fadeAlpha;
            ctx.drawImage(clincherImage.img, clincherImage.x, clincherImage.y, clincherImage.w, clincherImage.h);
        }
        else {
            ctx.drawImage(clincherImage.img, clincherImage.x, clincherImage.y, clincherImage.w, clincherImage.h);
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

	image = new CanvasImage("image1", 1, false);

	leadImage = new CanvasImage("lead", 2, false);
	clincherImage = new CanvasImage("clincher", 2, false)
	optimistImage = new CanvasImage("optimist", 3, true);
	pessimistImage = new CanvasImage("pessimist", 4, true);
	bestQualityImage = new CanvasImage("best quality", 3, true);
	worstQualityImage = new CanvasImage("worst quality", 4, true);
    state = [0, 0];

	handleResize();

	(function animloop(){
		requestAnimFrame(animloop);
		update();
	})();
};