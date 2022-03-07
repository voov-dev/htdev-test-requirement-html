const iniSwiperSection = (section) => {
  let swiperAdvantageWrap = document.querySelector(`${section} .swiper`);
  let swiperAdvantage;

  swiperAdvantageWrap.classList.add('is-destroy');

  if (swiperAdvantageWrap) {
    const breakpoint = window.matchMedia('(min-width: 1020px)');
    const breakpointChecker = () => {
      if (breakpoint.matches) {
        if (swiperAdvantage !== undefined) {
          swiperAdvantage.destroy(true, true);
        }

        swiperAdvantageWrap.classList.add('is-destroy');
      } else {
        swiperAdvantage = new Swiper(`${section} .swiper`, {
          loop: true,
          speed: 400,
          slidesPerView: 1,
          spaceBetween: 15,
          navigation: {
            nextEl: `${section} .section__swiper-button.section__swiper-button--next`,
            prevEl: `${section} .section__swiper-button.section__swiper-button--prev`,
          },
          pagination: {
            el: `${section} .swiper-pagination`,
          },
          breakpoints: {
            700: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
          },
        });

        swiperAdvantageWrap.classList.remove('is-destroy');
      }
    };

    breakpoint.addListener(breakpointChecker);
    breakpointChecker();
  }
};

export {iniSwiperSection};
