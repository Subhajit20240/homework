console.log('first')
const container = document.querySelector('.navlower1');
const ham = document.querySelector('.menu');

container.style.display='none';
let pressed = false
ham.addEventListener('click',()=>{
    if(pressed == false){
        container.style.display = 'block';
        pressed = true;
    }
    else{
        pressed = false;
        container.style.display='none';
    }
});
