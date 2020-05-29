var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg') {
      myImage.setAttribute ('src','https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRUqDhsNTvNzHrUvzDdD6cLxV0k5mq6wwxp7jebvHwm3XNb7c-R&usqp=CAU');
    } else {
      myImage.setAttribute ('src','https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg');
    }
}


var myButton= document.querySelector('button');
var myHeading=document.querySelector('h1');

function setUserName(){
	let myName= prompt('先生/小姐 你誰?');
	if (!myName || myName===null){
		setUserName();
	}else{
		localStorage.setItem('name',myName);
		myHeading.innerHTML='嗨 你好阿,'+myName;
		
		
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
