let btn=document.getElementsByClassName("btn");
let value=document.getElementById('counter');
const counter=document.querySelector('#counter');
let count=0;
btn[0].addEventListener('click',()=>{
    count++;
    value.innerText=count;
    if(count>0){counter.style.color='green'}
    if(count===0){counter.style.color='grey'}

});
btn[1].addEventListener('click',()=>{
    count--;
    value.innerText=count;
    if(count<0){counter.style.color='red'}
    if(count===0){counter.style.color='grey'}

});
btn[2].addEventListener('click',()=>{
    count=0;
    value.innerText=count;
    if(count===0){counter.style.color='grey'}
});
