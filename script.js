const hamburgerIcon = document.querySelector('.hamburger-icon');
const dropdownContent = document.querySelector('.dropdown-content');
const container = document.querySelector('.container');

hamburgerIcon.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
  if (dropdownContent.classList.contains('show')) {
    container.style.marginTop = '200px'; // Adjust the value as needed
  } else {
    container.style.marginTop = '20px'; // Adjust the value to the original margin
  }
});



 const productData = [
    {
      "id": "1",
      "title": "Exquisite Watches<br> <span>Gold Luxury,<span>Choose Us</span></span>",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$499",
      "imageUrl": "https://res.cloudinary.com/dqnqix89g/image/upload/v1710917317/Group_4_1_z5bh1v.png",
      'bg1':"#F4A764",
      'bg2':"#FFDEC2",
    },
    {
      "id": "2",
      "title": "Dainty Timepieces<br> <span>Silver Luxury,<span>Choose Us</span></span>",
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$469",
      "imageUrl": "https://res.cloudinary.com/dqnqix89g/image/upload/v1710914400/Group_5_l8b5a5.png",
      'bg1':"#ADB0B0",
      'bg2':"#E1E1E1",
    },
    {
      "id": "3",
      "title": "Exquisite Watches<br> <span>Choose Luxury,<span>Choose Us</span></span>",
      "description": "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
      "price": "$529",
      "imageUrl": "https://res.cloudinary.com/dqnqix89g/image/upload/v1710914415/Group_6_h5ezi2.png",
      'bg1':"#30A357",
      'bg2':"#75E39A",
    },
    {
      "id": "4",
      "title": "Exquisite Watches<br> <span>Choose Luxury,<span>Choose Us</span></span>",
      "description": "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
      "price": "$599",
      "imageUrl": "https://res.cloudinary.com/dqnqix89g/image/upload/v1710914400/Group_7_hrxr3k.png",
      'bg1':"#F24F4F",
      'bg2':"#FFA895",
    }
  ];
  const body = document.querySelector('body');
const header = document.querySelector('.header');
  const productInfoContainer = document.getElementById('product-info');
  const imageContainer = document.querySelector('.splide__list');

  const splide = new Splide('.splide', {
    type: 'fade',
    rewind:'true',
    width:"450px",
    pagination: false,
    perPage: 1,
    // breakpoints: {
    //   768: {
    //     perPage: 2,
    //   }
    // }
  })

  function updateProductInfo(index) {
    const product = productData[index];
    productInfoContainer.innerHTML = `
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <h1>${product.price}</h1>
      <div class="social-icons">
        <a href="#"><img src="https://res.cloudinary.com/dqnqix89g/image/upload/v1710926055/Frame_6_mpgwzn.png" alt="Facebook" class="logo"></a>
          </div>
    `;
    body.style.background = `linear-gradient(to right, ${product.bg1}, ${product.bg2})`;
    header.style.background = `linear-gradient(to right, ${product.bg1}, ${product.bg2})`;
  
  }

  productData.forEach(product => {
    const slide = document.createElement('li');
    slide.classList.add('splide__slide');
    slide.innerHTML = `<img src="${product.imageUrl}" alt="Product Image">`;
    imageContainer.appendChild(slide);
  });

  splide.on('move', (newIndex) => {
    updateProductInfo(newIndex);
  });

  // Initial update
  updateProductInfo(0);

  splide.mount()



