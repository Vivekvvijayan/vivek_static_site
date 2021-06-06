let loader = document.querySelector('.load-identity');


window.addEventListener('load',load);
function load(){
    loader.classList.add('preload');
    
}

setTimeout(() =>{
    loader.classList.remove('preload')
},3000);



