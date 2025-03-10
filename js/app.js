let par = document.querySelectorAll('.par')
let pluses = document.querySelectorAll('#plus')

pluses.forEach((plus, index) => {
    plus.onclick = () => {
        pluses[index].classList.toggle('active');
        par[index].classList.toggle('active');
    };
});

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}