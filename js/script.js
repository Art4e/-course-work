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

    // Открываем, закрываем бургер меню
    const burgerEl = document.querySelector('.js-header__burger');
    burgerEl.addEventListener('click', () => {
      const bodyEl = document.querySelector('body');
      const burgerMenuEl = document.querySelector('.js-burger__menu');
      const comeInEl = document.querySelector('.js-come-in');

      bodyEl.classList.toggle('body_lock');
      burgerEl.classList.toggle('header__burger-activ');
      burgerMenuEl.classList.toggle('burger__menu_activ');
      comeInEl.classList.toggle('btn');
    });

    // отслеживаем размеры окна
    ; (() => {
      const SIZE_SCRIN = 1050;
      const pageWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
      );
      const formSearchEl = document.querySelector('.js-header__search');
      const inContainerSearchEl = document.querySelector('.js-head-up')
      // при загрузке сравниваем размер окна с нужным SIZE_SCRIN
      // если равно или меньше добавляем поиск в верхнее меню
      if (pageWidth <= SIZE_SCRIN) {
        inContainerSearchEl.append(formSearchEl);
      }
      //отслеживаем прохождения медиазапроса с разрешением SIZE_SCRIN
      // добавляем или удаляем поиск из верхнего меню
      const mediaQueryList = window.matchMedia(`(max-width: ${SIZE_SCRIN}px)`);
      function movingFormSearch(e) {
        if (e.matches) {
          inContainerSearchEl.append(formSearchEl);
        } else {
          formSearchEl.remove();
        };
      }

      // обработка вида поиска при раскрытии на малых разрешениях
      // const searchButtonEl = document.querySelector('.js-search__button');
      formSearchEl.addEventListener('focus', () => {
        console.log(formSearchEl);
        console.log('нажал');
        // const bodyEl = document.querySelector('body');
        // burgerMenuEl.classList.toggle('burger__menu_activ');
        // comeInEl.classList.toggle('btn');
      });

      mediaQueryList.addListener(movingFormSearch);
    })();



    // слайдер галерея
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

    // Создаем аккардион

    crteatAccordion('.col-right__header');
    crteatAccordion('.menu-item__head');

    // Изменяем скролл 
    const elForScrolling = document.querySelectorAll('.menu-item__authors');

    elForScrolling.forEach(el => {
      new SimpleBar(el, { autoHide: false });
    });

  });

})();