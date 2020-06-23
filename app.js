document.querySelector('.bbutton').addEventListener('click', ()=>{

document.querySelector('.banner').style.display='none';
document.querySelector('.form-container').style.cssText= 'opacity:1; visibility: visible';
document.querySelector('.container').style.background='wheat';


});

document.querySelector('.x-button').addEventListener('click', () =>{
   document.querySelector('banner').style.display='flex';
   document.querySelector('.form-container').style.cssText= 'opacity:0; visibility: hidden';
   document.querySelector('.container').style.cssText=' background: url("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQagXpJmRDEwQVkMgexA0HAAL6UVxtfLjZWjAQ_2S2zt3wIWzS-&usqp=CAU") center background-size:cover' ;

});