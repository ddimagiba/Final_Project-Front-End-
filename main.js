console.log('main.js is connected')


var i = 0;
var images = [];
var time = 1000;


images[0] = './images/djpic1.jpg';
images[2] = './images/djpic10.jpg';
images[3] = './images/djpic2.jpg';
images[4] = './images/djpic3.jpg';
images[5] = './images/djpic4.jpg';
images[6] = './images/djpic5.jpg';
images[7] = './images/djpic6.jpg';
images[8] = './images/djpic7.jpg';
images[9] = './images/djpic8.jpg';
images[10] = './images/djpic9.jpg';

function changeImg(){
	document.mydjpics.src = images[i]

	if(i < images.length - 8){
		i++;

	} else {
		i = 0;
	}

	setTimeout("changeImg()", time);
}

	window.onload = changeImg;


