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
	// document.querySelector('.djslides .mydjpics) = images [i];
	var img = document.querySelectorAll('.djpics');
	 
	// for (var i of arr) {console.log (i)}

	// for (var i in arr) {
	// 	var img = document.querySelector('.mydjpics');
	// 	img.style.transform = 'translate(-1em,0)'; 
	// }


	// for(var i = 0; i < img.length; i++ ) {
	// 	// setTimeout('changeImg()', time);	
	// 	return console.log(i)
	// }
	// $(' .djslides .mydjpics').animate({'margin-left':'-=100vw'}, 1000);
}


	// if (i < images.length -  11){

	// 	i++;
	// } else { 
	// 	i = 0;	
	// }

	// setTimeout('changeImg()', time);
// }

// changeImg()

function changeImage() {
	var img = document.querySelectorAll('.mydjpics');

	for(var i = 0; i < img.length; i++ ) {
		img.style.transform = 'translate (-1em,0)';		
		// console.log(img[i])
	}
}


changeImage()