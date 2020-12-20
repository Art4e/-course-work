; (() => {

  document.addEventListener('DOMContentLoaded', () => {

    const swiperHead = new Swiper('.hero__slider', {
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
    const headUpEl = document.querySelector('.js-head-up');
    headUpEl.addEventListener('click', (ev) => {
      const bodyEl = document.querySelector('body');
      const burgerEl = headUpEl.querySelector('.js-header__burger');
      const burgerBodyEl = burgerEl.querySelector('span');
      const burgerMenuEl = headUpEl.querySelector('.js-header__menu');
      const comeInEl = headUpEl.querySelector('.js-come-in');
      const menuLinksEl = headUpEl.querySelectorAll('a');
      const toggleActivClass = () => {
        burgerMenuEl.classList.toggle('activ');
        comeInEl.classList.toggle('btn');
        burgerEl.classList.toggle('activ');
        bodyEl.classList.toggle('body_lock');
      };

      menuLinksEl.forEach(el => { if (ev.target === el) toggleActivClass() });
      if (ev.target == burgerEl || ev.target == burgerBodyEl) toggleActivClass();
    });

    // Открываем нижнее меню
    ; (() => {
      const downMenuItemsEl = document.querySelectorAll('.js-head-down__menu > li');

      downMenuItemsEl.forEach(el => {
        el.onmouseover = (event) => el.classList.add('activ');
        el.onmouseout = (event) => el.classList.remove('activ');
        el.addEventListener('focus', () => el.classList.add('activ'));
        el.addEventListener('blur', () => el.classList.remove('activ'));
      });

    })();

    // Изменяем положение поиска на брекпоинте 1050
    ; (() => {
      const formSearchEl = document.querySelector('.js-header__search'),
        inContainerSearchEl = document.querySelector('.js-head-up'),
        outContainerSearchEl = document.querySelector('.js-head-down');
      const SIZE_SCRIN = 1050;
      const pageWidth = Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
      );
      const movingFormSearch = (e) => {
        if (e.matches) {
          inContainerSearchEl.append(formSearchEl);
        } else {
          outContainerSearchEl.append(formSearchEl);
        };
      };

      if (pageWidth <= SIZE_SCRIN) inContainerSearchEl.append(formSearchEl);
      window.matchMedia(`(max-width: ${SIZE_SCRIN}px)`).addListener(movingFormSearch);
    })();

    ; (() => {
      // Отслеживаем выбор страны художника
      const сountrySelectEl = document.querySelector('.js-country-select').children;

      сountrySelectEl.forEach(el => {
        el.addEventListener('click', () => {
          сountrySelectEl.forEach(element => {
            if (el !== element) element.classList.remove('activ');
          });
          el.classList.toggle('activ');
        });
      });
    })();

    // Отобразить или скыть карточки "Сообытия" после первой "линии событий"
    ; (() => {
      const buttonEl = document.querySelector('.js-event-card__btn');
      const developmentsEl = document.querySelectorAll('.developments__event-card');

      developmentsEl.forEach(el => {
        if (el.offsetTop !== developmentsEl[0].offsetTop) {
          el.classList.add('deactivated');
        };
      });

      const deactivatedEl = document.querySelectorAll('.deactivated');

      buttonEl.addEventListener('click', () => {
        deactivatedEl.forEach(el => {
          el.classList.toggle('deactivated');
        });
      });
    })();

    // слайдер галерея
    const swiperGallery = new Swiper('.gallery-slider', {
      breakpoints: {
        1600: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          slidesPerColumn: 2,
          spaceBetween: 50
        },
        1001: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumn: 2,
          spaceBetween: 40
        },
        800: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          slidesPerColumn: 2,
          spaceBetween: 50
        },
        651: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          slidesPerColumn: 2,
          spaceBetween: 30
        },
        320: {
          slidesPerView: 1
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд'
      },
      pagination: {
        el: '.slider__pagination',
        clickable: true,
        type: 'fraction'
      }
    });

    // слайдер издания
    const swiperEdition = new Swiper('.edition__slider', {
      breakpoints: {

        1201: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 43
        },
        1000: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 40
        },
        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34
        },
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        }
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд'
      },
      pagination: {
        el: '.slider__pagination',
        clickable: true,
        type: 'fraction'
      }
    });


    // слайдер - партнеры
    const swiperPartners = new Swiper('.projects__slaider', {
      breakpoints: {
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50
        },
        1000: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 46
        },
        500: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },
        320: {
          slidesPerView: 1
        },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд'
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

    // Изменяем скролл 
    ; (() => {
      const scrollingEl = document.querySelectorAll('.authors__items');

      scrollingEl.forEach(el => {
        new SimpleBar(el, { autoHide: false });
      });
    })();

  });

  // Яндекс карта
  ymaps.ready(init);
  function init() {
    let myMap = new ymaps.Map("custom__map", {
      center: [55.7584, 37.6010],
      zoom: 15,
      controls: [],
    });

    let myGeoObject = new ymaps.Placemark([55.758463, 37.601079], {

    }, {
      iconLayout: 'default#image',
      iconImageHref: './img/contacts/marker.svg',
      iconImageSize: [20, 20],
      iconImageOffset: [-10, -10]
    });

    // Размещение геообъекта на карте.
    myMap.geoObjects.add(myGeoObject);
  };

})();