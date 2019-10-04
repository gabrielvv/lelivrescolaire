import React, { useRef, useEffect } from 'react'
import anime from 'animejs/lib/anime.es.js';
import charming from 'charming';

import './Mohe.css';

class Item {
    constructor(el, spreadFactor) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.name = el.querySelector('.menu__item-name');
        charming(this.DOM.name);
        this.DOM.nameLetters = Array.from(this.DOM.name.querySelectorAll('span'));
        this.spreadFactor = spreadFactor;
        this.initEvents();
    }
    initEvents() {
        this.mouseenterFn = () => this.mouseTimeout = setTimeout(() => {
            this.isActive = true;
            anime.remove(this.DOM.nameLetters);
            anime({
                targets: this.DOM.nameLetters,
                duration: 800,
                easing: 'cubicBezier(1, .3, .0, .7)',
                scale: (t,i) => [1,anime.random(0,1) ? 0.8:1.4],
                translateX: (t,i) => {
                    const elBounds = this.DOM.el.getBoundingClientRect();
                    const x1 = elBounds.left + elBounds.width/2;
                    const y1 = elBounds.top + elBounds.height/2;
                    
                    const targetBounds = t.getBoundingClientRect();
                    const x2 = targetBounds.left + targetBounds.width/2;
                    const y2 = targetBounds.top + targetBounds.height/2;

                    const dist = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
                    const maxDist = Math.sqrt(Math.pow(elBounds.left-x1,2) + Math.pow(elBounds.top-y1,2));
                    const maxTX = x2<x1?-this.spreadFactor.x:this.spreadFactor.x;

                    return maxTX/maxDist*dist;
                },
                translateY: (t,i) => [0,anime.random(-this.spreadFactor.y,this.spreadFactor.y)],
                rotateZ: (t,i) => [0,anime.random(-20,20)],
                opacity: (t,i) => 0,
            });	
        }, 50);

        this.mouseleaveFn = () => {
            clearTimeout(this.mouseTimeout);
            if( !this.isActive ) return;
            this.isActive = false;
            anime.remove(this.DOM.nameLetters);
            anime({
                targets: this.DOM.nameLetters,
                duration: 800,
                easing: 'cubicBezier(.7, .0, .3, 1)',
                scale: 1,
                translateX: 0,
                translateY: 0,
                rotateZ: 0,
                opacity: 1
            });
        };

        this.DOM.el.addEventListener('mouseenter', this.mouseenterFn);
        this.DOM.el.addEventListener('touchstart', this.mouseenterFn);
        this.DOM.el.addEventListener('mouseleave', this.mouseleaveFn);
        this.DOM.el.addEventListener('touchend', this.mouseleaveFn);
    }
}

const Mohe = () => {
    const itemRef = useRef(null);
    useEffect(() => {
        itemRef && new Item(itemRef.current, { x: 100, y: 10 });
        return () => {
            //cleanup
        };
    }, [])
    
    return (
        <nav className="menu menu--mohe">
            <a className="menu__item" ref={itemRef} href="#">
                <span className="menu__item-name">contact</span>
                <a href="mailto:gabriel.vautrin@gmail.com" className="menu__item-label">
                    gabriel.vautrin@gmail.com
                </a>
            </a>
        </nav>
    )
}

export default Mohe;