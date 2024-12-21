new TypeIt('.text', {
    strings: ["Front-End Developer", "YouTuber", "Web Developer"],
    speed: 100,
    deleteSpeed: 100,
    breakDelay: 1000,
    loop: true
}).go();


let opens = document.querySelector('header .menu button');
let close = document.querySelector('.sidemenu .close');
let side = document.querySelector('.sidemenu');

// opens.onclick = () => {side.classList.add('open')};
// opens.onclick = () => {side.classList.remove('open')}; 
opens.onclick = () => { side.classList.add('open'); }
close.onclick = () => { side.classList.remove('open'); }


let top_btn = document.querySelector('.back-up');
window.onscroll = () => {
    if (window.pageYOffset > 300) {
        top_btn.classList.add('active')
    } else {
        top_btn.classList.remove('active')
    }
}
top_btn.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

let model = document.querySelector('.model');
let closed = document.querySelector('.model-close');

setTimeout(() => {
    model.classList.add('show')
}, 1000);

closed.onclick = () => {
    model.classList.remove('show');
}

