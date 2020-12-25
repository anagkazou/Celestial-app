import $ from "jquery";
import { gsap } from "gsap";

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

export default { InitHamburgerAnimation, InitPreviewAnimation, menuAnimation };
