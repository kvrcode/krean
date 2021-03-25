import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import FastAverageColor from 'fast-average-color';

export const nav_animation = (nav, links) => {

    const nav_tl = gsap.timeline({ paused: true });
    nav_tl.to(nav, {
        duration: 1,
        transform: 'translate(0,0)',
        opacity: 1,
    })
    nav_tl.to(links, {
        duration: 1,
        transform: 'translate(0,0)',
        opacity: 1,
        stagger: 0.15
    })

    return nav_tl;

}

export const hero_animation = () => {
    const elements = document.querySelectorAll('.hero__content > *');

    gsap.to(elements, {
        delay: 0.75,
        duration: 1,
        opacity: 1,
        transform: 'translate(0,0)',
        stagger: 0.25
    })
    console.log('hero');
}

export const services_animation = () => {
    const icons = document.querySelectorAll('.services__icon');
    const headlines = document.querySelectorAll('.services__card > h5');
    const paragraphs = document.querySelectorAll('.services__card > p');

    gsap.to([icons, headlines, paragraphs], {
        scrollTrigger: {
            trigger: '.services',
            start: 'top center',
        },
        delay: 0.5,
        duration: 1,
        opacity: 1,
        transform: 'skew(0)',
        stagger: 0.1
    })
    console.log('services');
}

export const portfolio_animation = () => {

    const cards = document.querySelectorAll('.works__grid__card');

    // const fac = new FastAverageColor();
    // fac.getColorAsync(container.querySelector('img'))
    //     .then(color => {
    //         container.style.backgroundColor = color.rgba;
    //         container.style.color = color.isDark ? '#fff' : '#000';
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     });

    gsap.to(cards,{
        scrollTrigger: {
            trigger: '.works__grid__card',
            start: 'top center',
        },
        delay: 0.5,
        duration: 1,
        opacity: 1,
        transform: 'translate(0,0)',
        stagger: 0.25
    })
        console.log('portfolio');
}

export const references_animation = () => {
    const ref_img = document.querySelector('.references__img');
    const ref_name = document.querySelector('.references__name');
    const ref_about = document.querySelector('.references__about');

    gsap.to(ref_img,{
        scrollTrigger: {
            trigger: '.references',
            start: 'top center',
        },
        delay: 0.5,
        duration: 1,
        opacity: 1,
        transform: 'skew(0)',
        stagger: 0.25
    })
}

export const contact_animation = () => {
    const inputs = document.querySelectorAll('.contact__input');

    gsap.to(inputs, {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top center'
        },
        delay: 0.5,
        duration: 0.5,
        opacity: 1,
        transform: 'translate(0)',
        stagger: 0.2
    })
}

export const handle_animation = () => {

}