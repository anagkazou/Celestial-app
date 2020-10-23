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

export default { InitHamburgerAnimation, InitPreviewAnimation };
