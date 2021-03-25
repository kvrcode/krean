import { nav_animation } from './animation.js';

const handle_toggle = (click, control, links) => { //change actual styles, transform: translate...

    click.classList.toggle('is-active');
    control.parentElement.classList.toggle('header-nav-active-bg');

    return click.classList.contains('is-active') ? true : false

}

// const remove = (hamburger, nav) => {
//     hamburger.classList.remove('is-active');
//     nav.classList.remove('nav-active-toggle');
//     hamburger.parentElement.classList.remove('header-nav-active-bg');
// }

//captures DOM elements, passes to callback() in event listener
export const toggle_nav = () => {

    const nav = document.querySelector('.nav');
    const links  = document.querySelectorAll('.nav__links > a');
    const hamburger = document.querySelector('.hamburger');
    const tl = nav_animation(nav, links);

    hamburger.addEventListener('click', () => {

        const bool = handle_toggle(hamburger, nav, links);
        bool ? tl.play() : tl.reverse();
        // if(bool) {
        //     tl.play();
        // }else if(!bool && window.innerWidth < 1024){
        //     tl.reverse();
        // }else if (!bool && window.innerWidth > 1024){
        //     tl.pause()
        // }

    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            if(window.innerWidth < 1024) {
                tl.reverse();
            }
        })
    })
    if(window.innerWidth > 1024){ tl.play(); }
}