import 'regenerator-runtime';
//adding css
import "../styles/main.scss";
//modules
import { handle_jump } from './scroll.js';
import { toggle_nav } from './nav.js';
import { hero_animation, services_animation, portfolio_animation, references_animation, contact_animation } from './animation.js';

handle_jump();

const hero_imgs = async () => {
    const { hero_arr } = await import('./images.js');

    const mouse_scroll = document.querySelector('.hero__mouse');
    const header_bg = document.querySelector('.header-hero-background-img');

    mouse_scroll.src = hero_arr[1];
    header_bg.src = hero_arr[0];
}

const services_imgs = async () => {
    const { services_arr } = await import('./images.js');

    const icons = document.querySelectorAll('.services__icon');
    icons.forEach((icon, key) => {
        icon.src = services_arr[key];
    });
}
// services_animation();


const ref_img = async () => {
    const { references_arr } = await import('./images.js');

    const ref = document.querySelector('.references__img');
    ref.src = references_arr[0];
}

const portfolio_imgs = async () => {
    const { portfolio_arr } = await import('./images.js');

    const cards = document.querySelectorAll('.works__grid__card');
    cards.forEach((card, key) => {
        card.style.background = `url(${portfolio_arr[key]}) 50% 50%/cover no-repeat`
    })
}

//prevents default action for input:submit
const prevent = (() => {
    const submit = document.querySelector('.contact__input-submit');

    submit.addEventListener('click', (e) => {
        e.preventDefault();
    })
})()

document.addEventListener('DOMContentLoaded', () => { //this doesnt seem like best practice...
    hero_imgs();
    services_imgs();
    portfolio_imgs();
    ref_img();
    toggle_nav();
    hero_animation();
    services_animation();
    portfolio_animation();
    references_animation();
    contact_animation();
});
