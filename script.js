document.addEventListener('DOMContentLoaded', function () {
    new Splide('#product-slider', {
      type: 'slide',
      perPage: 3,
      gap: '1rem',
      pagination: false,
      breakpoints: {
        768: {
          perPage: 2,
        },
        576: {
          perPage: 1,
        }
      }
    }).mount();
  });