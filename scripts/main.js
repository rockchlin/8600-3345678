var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute ('src','images/001.png');
    } else {
      myImage.setAttribute ('src','images/firefox-icon.png');
    }
}


var myButton= document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
	let myName= prompt('please enter your name.');
	if (!myName || myName===null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.innerHTML='Mozilla is cool,'+myName;
		
		
	}
}

if (!localStorage.getItem('Name')){
	setUserName();
	
	
}else{
	let storedName=localName.getItem('name');
	myHeading.innerHTML='Mozilla is cool,'+storedName;	
}

myButton.onclick=function(){
	setUserName();
}
