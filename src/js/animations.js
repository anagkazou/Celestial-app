import $ from "jquery";
import { gsap , TimelineMax} from "gsap"; //Improve this import!!

import {ScrollTrigger} from 'gsap/ScrollTrigger';

import Scrollbars from "react-custom-scrollbars";


export function InitPreviewAnimation() {
  $(".collection-title").each(function (index, el) {
    const thisId = el.id;
    const $thisPreviewImages = $(".preview__left, .preview__right").find(
      `img[id="${thisId}"]`
    );
    const $allImages = $(".preview__left img, .preview__right img");
    const $otherImages = $(".preview__left, .preview__right")
      .find("img")
      .not(`[id="${thisId}"]`);

    $(el).on("mouseenter", (el) => {
      // $($otherImages).addClass(".mouseentered");
      gsap.set($allImages, {
        y: 100,
      });
      gsap.to($thisPreviewImages, {
        opacity: 1,
        y: -30,
        ease: "Power1.easeOut",
        duration: 0.5,
      });

      gsap.to($otherImages, {
        opacity: 0,
      });
    });
  });
}

export function InitHamburgerAnimation() {
  $(document).ready(function () {
    
    $(".hamburger").click(function () {
      $(this).toggleClass("is-active");

    });
      });
}

  export function menuAnimation(){
    
    const $menuNav = $(".menu-nav");
    const $menuLeft = $(".menu-nav__left");
    const $menuRight = $(".menu-nav__right");
    const $menuMainLinks = $(".menu-nav__main");
    const $menuHead = $(".menu-nav__head");
   const tl = new gsap.timeline({reversed:true});

      tl
      .to($menuNav, {
        autoAlpha:1,
        duration:.1
      })
      .to($menuLeft, {
        height: "100vh",
        ease:"power4.in",
      })
      .to($menuRight, {
        height: "100%",
        ease:"power4.out",
      })
      .to($menuHead, {
        autoAlpha:1,
        duration: .2
      })
      .to($menuMainLinks, {
         autoAlpha:1,
         duration: .2

      })



      console.log("clicked",tl)

      $(".hamburger").click(function () {
        if (tl.reversed()) {
          tl.play();
        } else {
          tl.reverse();
        }      });
    }

    export function shopFilterAnimation (){
      const $filterDropdown = $(".filter");
     
      const tl = new gsap.timeline({reversed:true});

    if ( window.innerWidth < 600){
        tl
        .fromTo($filterDropdown, .4, {
          autoAlpha:0,
          y:-80
        },
        {
          autoAlpha:1,
        y:0});
        
  
  
  
        console.log("clicked",tl)
  
        $(".shop__title, .filter__hide ").click(function () {
          if (tl.reversed()) {
            tl.play();
          } else {
            tl.reverse();
          }      });}
      }

      export function cartPreviewAnimation(){
     console.log("cart clicked");
      const tl = new gsap.timeline({reversed:true});

        tl
        .fromTo(".cart-preview", .4, {
          autoAlpha:0,
          x:-30
        },
        {
          autoAlpha:1,
        x:0});
        
        console.log("clicked",tl)
  
        $(".btn--close, .cart-icon").click(function () {
          if (tl.reversed()) {
            tl.play();
          } else {
            tl.reverse();
          }      });}
    
          export function ScrollTriggerAnimations(){
           
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.defaults({
              toggleActions: "restart pause resume pause",
              markers:true, 
            });


              // ScrollTrigger.scrollerProxy("body", {
              //   scrollTop(value){
              //     if(arguments.length){
              //       bodySc
              //     }
              //   }
              // })


                            gsap.to(".anim__hide", {
                              scrollTrigger: {
                                trigger: ".header",
                                start: "bottom 15%",
                                toggleActions: "play none none reset",
                                markers:true,
                              },
                              autoAlpha:0,

                            }, );
          }


export default { InitHamburgerAnimation, InitPreviewAnimation, menuAnimation, shopFilterAnimation, cartPreviewAnimation, ScrollTriggerAnimations };
