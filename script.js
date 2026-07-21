const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
const year = document.getElementById('year');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDescription = document.getElementById('lightbox-description');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const bundleButtons = document.querySelectorAll('.bundle-preview');
const protectedImages = document.querySelectorAll('img[data-src]');

const bundleData = {
  sparkout: {
    title: 'SparkOut - 2026',
    description: "Third-year students at Nottingham Trent University hosted their Capstone Project event to help showcase their work and support their journey into the industry. Huge thank you to Marcel Kajut for inviting me to photograph Sparkout 2026. It was an amazing event with a great atmosphere, where everyone involved — both attendees and organisers — clearly enjoyed the experience.",
    images: [
      {
        src: 'images/sparkout/Sparkout Crew.jpg',
        alt: 'Sparkout crew behind the scenes',
        caption: 'I was honoured to be invited to SparkOut, an event hosted by third-year students from <a href="https://www.linkedin.com/company/nottingham-trent-university/" target="_blank" rel="noreferrer">Nottingham Trent University</a> as part of their Capstone Project. The event showcased not only esports production and broadcasting skills, but also the teamwork, organisation, and dedication required to deliver a live event successfully. It was great to experience the behind-the-scenes work that went into coordinating production, talent, and event operations. Being able to photograph and capture moments from the event was a valuable experience and another opportunity for me to continue developing my freelance photography and videography work within esports. A huge thank you to everyone involved for the invitation and hospitality throughout the event. I’m looking forward to seeing what future students create next year. Casters: <a href="https://www.linkedin.com/in/ayaan-ahmed-08078a1b6/" target="_blank" rel="noreferrer">Ayaan Ahmed</a>, PandaRichicasts, Greg – Nottingham College'
      },
      { src: 'images/sparkout/Audience.jpg', alt: 'Audience watching the event' },
      { src: 'images/sparkout/Audience 2.jpg', alt: 'Crowd shot during the show' },
      { src: 'images/sparkout/Audince 3.JPG', alt: 'Packed audience, wide shot' },
      { src: 'images/sparkout/Audince 4.JPG', alt: 'Fans reacting to the action' },
      { src: 'images/sparkout/Casters.jpg', alt: 'Casters commentating the match' },
      { src: 'images/sparkout/Casters 2.jpg', alt: 'Close-up of casters at the desk' },
      { src: 'images/sparkout/Casters 3.JPG', alt: 'Casters during a heated moment' },
      { src: 'images/sparkout/Casters 4.JPG', alt: 'Casters and host on stage' },
      { src: 'images/sparkout/Host and Caster.jpg', alt: 'Host and caster interacting' },
      { src: 'images/sparkout/Lighting board.jpg', alt: 'Lighting board operation' },
      { src: 'images/sparkout/Lighting board 2.jpg', alt: 'Lighting rig close-up' },
      { src: 'images/sparkout/Players 1.JPG', alt: 'Players preparing backstage' },
      { src: 'images/sparkout/Players 2.JPG', alt: 'Players focused on the game' },
      { src: 'images/sparkout/Roaming Cam.jpg', alt: 'Roaming camera operator in action' },
      { src: 'images/sparkout/Singer.jpg', alt: 'Singer performing on stage' }
    ]
  },
  'motorsport-uk': {
    title: 'Motorsport UK 2026',
    description: 'Momentum, celebration, and the pressure of a decisive sports final.',
    images: [
      {
        src: 'images/motorsport/1.svg',
        alt: 'Athlete sprinting toward the finish line'
      },
      {
        src: 'images/motorsport/2.svg',
        alt: 'Fans celebrating after a big play'
      },
      {
        src: 'images/motorsport/3.svg',
        alt: 'Sports action during a tense game'
      }
    ]
  },
  'nse-finals': {
    title: 'NSE Finals 2026',
    description: 'The atmosphere, scale, and excitement of a packed live event.',
    images: [
      {
        src: 'images/nse/1.svg',
        alt: 'Crowd packed into an arena before the event starts'
      },
      {
        src: 'images/nse/2.svg',
        alt: 'Bright stadium lights and audience excitement'
      },
      {
        src: 'images/nse/3.svg',
        alt: 'A dramatic moment from the live event'
      }
    ]
  }
};

let currentBundle = null;
let currentSlideIndex = 0;

if (year) {
  year.textContent = new Date().getFullYear();
}

protectedImages.forEach((img) => {
  const src = img.getAttribute('data-src');
  if (src) {
    img.setAttribute('src', src);
  }
});

document.addEventListener('contextmenu', (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    cards.forEach((card) => {
      const category = card.dataset.category;
      const matches = filter === 'all' || category === filter;
      card.style.display = matches ? 'block' : 'none';
    });
  });
});

function openLightbox(bundleKey) {
  const bundle = bundleData[bundleKey];
  if (!bundle) return;

  currentBundle = bundle;
  currentSlideIndex = 0;
  renderSlide();
  lightbox.classList.add('open');
  lightbox.setAttribute('aria-hidden', 'false');
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightbox.setAttribute('aria-hidden', 'true');
}

function renderSlide() {
  if (!currentBundle) return;
  const slide = currentBundle.images[currentSlideIndex];
  lightboxImage.src = slide.src;
  lightboxImage.alt = slide.alt;
  lightboxTitle.textContent = currentBundle.title;
  // If the slide has a custom caption (HTML), show it; otherwise show bundle description + alt text
  if (slide.caption) {
    lightboxDescription.innerHTML = slide.caption;
  } else {
    lightboxDescription.innerHTML = '<p>' + currentBundle.description + '</p><p>' + slide.alt + '</p>';
  }
}

function showNextSlide() {
  if (!currentBundle) return;
  currentSlideIndex = (currentSlideIndex + 1) % currentBundle.images.length;
  renderSlide();
}

function showPrevSlide() {
  if (!currentBundle) return;
  currentSlideIndex = (currentSlideIndex - 1 + currentBundle.images.length) % currentBundle.images.length;
  renderSlide();
}

bundleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    openLightbox(button.dataset.bundle);
  });
});

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', showNextSlide);
lightboxPrev.addEventListener('click', showPrevSlide);

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', (event) => {
  if (lightbox.classList.contains('open')) {
    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      showNextSlide();
    } else if (event.key === 'ArrowLeft') {
      showPrevSlide();
    }

  }
});
