// Gallery Images Data
const galleryImages = [
  {
    url: '../image/1 (1).jpeg',
    alt: 'طفلة في منطقة التلوين',
  },
  {
    url: '../image/1 (2).jpeg',
    alt: 'أطفال يلعبون على الترامبولين',
  },
  {
    url: '../image/1 (3).jpeg',
    alt: 'منطقة الترامبولين',
  },
  {
    url: '../image/1 (4).jpeg',
    alt: 'منطقة الجلوس الخارجية',
  },
  {
    url: '../image/1 (5).jpeg',
    alt: 'أرجوحة للأطفال',
  },
  {
    url: '../image/1 (6).jpeg',
    alt: 'طفلة تعرض رسمتها',
  },
  {
    url: '../image/1 (7).jpeg',
    alt: 'أطفال في منطقة الكرات الملونة',
  },
  {
    url: '../image/1 (8).jpeg',
    alt: 'أطفال في المطبخ التفاعلي',
  },
  {
    url: '../image/1 (9).jpeg',
    alt: 'طفلة تلون في الكيدز إريا',
  },
  // {
  //   url: '../image/1 (11).jpeg',
  //   alt: 'أطفال يلعبون في منطقة الألعاب',
  // },
  // {
  //   url: '../image',
  //   alt: 'أطفال في منطقة التلوين',
  // },
  // {
  //   url: '../image',
  //   alt: 'منطقة حوض الكرات',
  // },
  // {
  //   url: '../image',
  //   alt: 'المنطقة الخارجية للكافيه',
  // },
  // {
  //   url: '../image',
  //   alt: 'طفل في المطبخ التفاعلي',
  // },
  // {
  //   url: '../image',
  //   alt: 'منطقة اللعب بالكرات',
  // },
  // {
  //   url: '../image',
  //   alt: 'طفلة تلعب في المطبخ',
  // },
];

// Load Gallery Images
function loadGallery() {
  const galleryGrid = document.getElementById('galleryGrid');

  galleryImages.forEach((image, index) => {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item';
    galleryItem.style.animationDelay = `${index * 0.1}s`;

    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    img.loading = 'lazy';

    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);

    // Add click event to open image in new tab
    galleryItem.addEventListener('click', function () {
      window.open(image.url, '_blank');
    });
  });
}

// Toggle Mobile Menu
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Add scroll effect to header
let lastScroll = 0;
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  const currentScroll = window.pageYOffset;

  if (currentScroll > lastScroll && currentScroll > 100) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }

  lastScroll = currentScroll;
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px',
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections and cards
document.addEventListener('DOMContentLoaded', function () {
  loadGallery();

  const elementsToAnimate = document.querySelectorAll(
    '.package-card, .service-card, .benefit-item, .contact-card, .gallery-item'
  );
  elementsToAnimate.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
  });
});

// WhatsApp button click tracking
document.querySelectorAll('a[href^="https://wa.me"]').forEach((link) => {
  link.addEventListener('click', function () {
    console.log('WhatsApp button clicked');
  });
});

// Add loading animation
window.addEventListener('load', function () {
  document.body.style.opacity = '0';
  setTimeout(function () {
    document.body.style.transition = 'opacity 0.5s';
    document.body.style.opacity = '1';
  }, 100);
});
