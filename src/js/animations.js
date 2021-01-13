import $ from "jquery";
import { gsap , TimelineMax} from "gsap"; //Improve this import!!

import {ScrollTrigger} from 'gsap/ScrollTrigger';



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
  if ( window.innerWidth > 1024){

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
  }
  });
}

export function InitHamburgerAnimation() {
  $(document).ready(function () {
    
    $(".hamburger, .menu-nav__link").click(function () {
      $(".hamburger").toggleClass("is-active");
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

      $('.hamburger, .menu-nav__link').click(function () {
        if (tl.reversed()) {
          tl.play();

        } else {
          tl.reverse();

        }      });

        return{
          toggleMenu:() =>{
            if (tl.reversed()) {
              tl.play();
            } else {
              tl.reverse();
            }      }
          }
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

      
    
          export function ScrollTriggerAnimations(){
           
            gsap.registerPlugin(ScrollTrigger);
            ScrollTrigger.defaults({
             // markers:true, 
            });

        let headerAnim = new TimelineMax();

            headerAnim.to(".header", {
              scrollTrigger: {
                trigger: ".header",
                start: "25% top",
                toggleActions: "play none none reset",
                markers:true
              },
              //autoAlpha:0,
              backdropFilter: "blur(12px) ",
              height: "15vh"
            }, );

            let aboutSectionAnim = new TimelineMax();

            aboutSectionAnim
            .to(".img-2", {
              scrollTrigger:{               
                trigger:".section_about",
                start: "30% top",
                toggleActions: "play none none reset",
                scrub: 1,

              },
              scale:1.2,   
            })
            .to(".img-2__banner",{
              scrollTrigger:{               
                trigger:".section_about",
                start: "30% top",
                toggleActions: "play none none reset",
                scrub: 2,

              },
              y: 60, 
            })
          }


export default { InitHamburgerAnimation, InitPreviewAnimation, menuAnimation, shopFilterAnimation, ScrollTriggerAnimations };
