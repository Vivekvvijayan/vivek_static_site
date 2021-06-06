let content = document.querySelector('.main-section');
window.onload = () => {
    content.style.visibility = 'hidden';
}

setTimeout(() =>{
    content.style.visibility = 'visible';

},4000)

let bar = document.querySelector('.bar');

bar.onclick = () => {

    let ul = document.querySelector('ul');

    ul.classList.toggle('toggle');
   

    if(ul.classList.contains('toggle'))
    {
        bar.src = '.Images/close bar.png'
        bar.style.borderRadius = '50%';
        
    }

    else{
        bar.src = './Images/menu.png'
    }
}

let tops = () => {

    let scrollY = window.scrollY;
    let scrollTop = document.querySelector('#top-scroll');
    let nav = document.querySelector('nav');

    if(scrollY > 90)
    {
        scrollTop.style.visibility = 'visible';
        nav.style.backgroundColor = '#f6f6f6';

    }

    else{
        scrollTop.style.visibility = 'hidden';
        nav.style.backgroundColor = '#fff';

    }
    
} 



window.addEventListener('scroll',tops);


