import jump from 'jump.js';
import { services_animation } from './animation.js';

// const assign_animation = (target) => {
//     const name = target.split('').slice(1, target.length).join('');

//     if(name === 'header'){

//         console.log(name);

//     } else if(name === 'services'){

//         return services_animation();

//     } else if(name === 'works'){

//         return console.log(name);

//     } else if(name === 'references') {

//         return console.log(name);

//     } else if(name === 'contact') {

//         return console.log(name);

//     }
// }

export const handle_jump = () => {
    const links = document.querySelectorAll('.scroll');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = e.target.getAttribute('href');

            jump(target, {
                duration: 1000,
                //callback: assign_animation(target), //this is useless due to gsap scrollTrigger
            })
        })
    })
}