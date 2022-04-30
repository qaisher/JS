console.log('connected');
var head = document.getElementsByClassName('hobby');
console.log(head);
var hobbyList = document.getElementsByClassName('hobby');
console.log(hobbyList);
var paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
paragraphs[0].textContent = 'changed lorem ipsum';
/*var changeColor = prompt('Enter yes if you want to change bg color');
if(changeColor === 'yes'){
var col = document.getElementById('body');
col.style.background = 'blue';
}*/
var button = document.querySelector('.firstButton');
button.addEventListener('click', function(){
    //var changeText = document.querySelector('.buttonOutput');
   // changeText.textContent('You clicked the button');
   console.log('you clicked');
});

var lis = document.querySelectorAll('li');
for(var i = 0; i<lis.length;i++){
    lis[i].addEventListener('click', function(){
        //console.log(i);
        this.style.color = 'brown';
    });
}
 

