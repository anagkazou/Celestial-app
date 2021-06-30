import $ from "jquery";
import { gsap, TimelineMax } from "gsap"; //Improve this import!!

import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    if (window.innerWidth > 1024) {
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

export function menuLinkAnimation() {
  $(".menu-nav__link").each(function (index, el) {
    const thisId = el.id;
    const $thisimg = $(".menu-nav__left--imgs").find(`img[id="${thisId}"]`);
    const $otherimgs = $(".menu-nav__left--imgs")
      .find("img")
      .not(`[id="${thisId}"]`);

    $(el).mouseenter((e) => {
      if (window.innerWidth >= 800) {
        // animate in this img
        gsap.to($thisimg, {
          opacity: 1,
          zIndex: 3,
          duration: 1.5,
        });

        // fade out other imgs
        gsap.to($otherimgs, {
          opacity: 0,
          zIndex: 2,
        });
      }
    });
  });
}

export function InitHamburgerAnimation() {
  $(document).ready(function () {
    $(".hamburger, .menu-nav__link").click(function () {
      $(".hamburger").toggleClass("is-active");
    });
  });
}

export function menuAnimation() {
  const $menuNav = $(".menu-nav");
  const $menuLeft = $(".menu-nav__left");
  const $menuRight = $(".menu-nav__right");
  const $menuMainLinks = $(".menu-nav__main");
  const $menuHead = $(".menu-nav__head");
  const tl = new gsap.timeline({ reversed: true });

  tl.to($menuNav, {
    autoAlpha: 1,
    duration: 0.1,
  })
    .to($menuLeft, {
      height: "100vh",
      ease: "power4.in",
    })
    .to($menuRight, {
      height: "100%",
      ease: "power4.out",
    })
    .to($menuHead, {
      autoAlpha: 1,
      duration: 0.2,
    })
    .to($menuMainLinks, {
      autoAlpha: 1,
      duration: 0.2,
    });

  $(".hamburger, .menu-nav__link").click(function () {
    if (tl.reversed()) {
      tl.play();
    } else {
      tl.reverse();
    }
  });
}

export function shopFilterAnimation() {
  const $filterDropdown = $(".filter");

  const tl = new gsap.timeline({ reversed: true });

  if (window.innerWidth < 600) {
    tl.fromTo(
      $filterDropdown,
      0.4,
      {
        autoAlpha: 0,
        y: -80,
      },
      {
        autoAlpha: 1,
        y: 0,
      }
    );

    $(".shop__title, .filter__hide ").click(function () {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.reverse();
      }
    });
  }
}

export function ScrollTriggerAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.config({
    autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // notice "resize" isn't in the list
  });
  let headerAnim = new TimelineMax();

  headerAnim.to(".header", {
    scrollTrigger: {
      trigger: ".header",
      start: "25% top",
      toggleActions: "play none none reset",
    },
    backdropFilter: "blur(18px) ",
  });

  let aboutSectionAnim = new TimelineMax();

  aboutSectionAnim.to(".img-2", {
    scrollTrigger: {
      trigger: ".section__about",
      start: "-20% top",
      toggleActions: "play none none reset",
      scrub: 1,
    },
    scale: 1.3,
    ease: "linear",
  });

  aboutSectionAnim.to(".img-2__banner", {
    scrollTrigger: {
      trigger: ".section__about",
      start: "-20% top",

      end: "60% 50%",
      toggleActions: "play none none reset",
      scrub: 3,
    },
    y: 120,
    ease: "linear",
  });

  let ethosSectionAnim = new TimelineMax();

  ethosSectionAnim.to(".img-2", {
    scrollTrigger: {
      trigger: ".section__ethos",
      start: "-20% top",
      toggleActions: "play none none reset",
      scrub: 1,
    },
    scale: 1.4,
    ease: "linear",
  });

  ethosSectionAnim.to(".img-2__banner", {
    scrollTrigger: {
      trigger: ".section__ethos",
      start: "-20% top",
      toggleActions: "play none none reset",
      scrub: 1,
    },
    y: 120,
    ease: "linear",
  });
}

export function AddedToCartModal() {
  let tl = new TimelineMax();

  tl.fromTo(
    ".modal",
    {
      autoAlpha: 0,
      y: 80,
    },
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.8,
    }
  ).to(".modal", {
    autoAlpha: 0,
  });
}

export function PageTransitions() {
  let tl = new TimelineMax();
  gsap.utils.toArray("a, button").forEach((link, i) => {
    $(link).click(function () {
      tl.fromTo(
        ".preloader",
        {
          display: "block",
          autoAlpha: 1,
        },
        {
          display: "none",
          autoAlpha: 0,
        }
      );
    });
  });
}

export const ShopScrollAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let tl = new TimelineMax();
  if (window.innerWidth > 800) {
    tl.to(".filter", {
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        toggleActions: "play none none reset",
      },
      autoAlpha: 0,
      ease: "circ.out",
    });
  }
};

export default ScrollTriggerAnimations;
