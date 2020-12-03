; (() => {

  document.addEventListener('DOMContentLoaded', () => {

    const swiperHead = new Swiper('.header-slider', {
      speed: 1500,
      autoplay: {
        delay: 5000,
        autoplayDisableOnInteraction: false,
      },
      loop: true,
      effect: 'fade',
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}',
      },
      scrollbar: {
        hide: true,
      },
      pagination: {
        el: '.swiper-pagination',
        bulletElement: 'button',
        clickable: true,
      },
    });

    const swiperGallery = new Swiper('.gallery-slider', {
      // loop: true,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      // slidesPerColumnFill: 'row',
      navigation: {
        nextEl: 'swiper-button-next',
        prevEl: 'swiper-button-prev'
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд'
        // paginationBulletMessage: 'Перейти к слайду {{index}}',
      },
      pagination: {
        el: '.gallery-slider-pagination',
        clickable: true,
        type: 'fraction'
        // renderFraction: function (currentClass, totalClass) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span> >';
        // },
      }
    });

    // выбор элементов select, применение к ним Choices
    ; (() => {
      const selectAllEl = document.querySelectorAll('select');
      if (!selectAllEl) return;
      selectAllEl.forEach(el => {
        const realism = new Choices(el, {

          searchEnabled: false,
          shouldSort: false,
          itemSelectText: '',
        });
      });
    })();

  });

})();