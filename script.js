const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.card');
const filterMessage = document.getElementById('filter-message');
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
    description: 'I was invited by Roman, a third-year NTU Esports Production student, to photograph their Capstone Project, Motorsport UK. At the time, I was still new to photography and videography and unsure where to start. Being invited gave me the confidence boost I needed and helped me move onto other projects, allowing me to grow and showcase my passion for photography and videography. This bundle also highlights the broadcast team, including casters and analysts Tom Knight and Adam Reid, along with the event observers and production crew.',
    images: [
      {
        src: 'images/motorsport/Main Crew.JPG',
        alt: 'Main crew at Motorsport UK event',
        caption: 'Main crew from the Motorsport UK Capstone Project, photographed after being invited by Roman to capture the event story and production energy.'
      },
      {
        src: 'images/motorsport/Caster and Anylist.JPG',
        alt: 'Casters and analysts Tom Knight and Adam Reid at Motorsport UK',
        caption: 'Casters and analysts <a href="https://www.linkedin.com/in/tom-knight-414140360/" target="_blank" rel="noreferrer">Tom Knight</a> and <a href="https://www.linkedin.com/in/adam-reid-40022525a/" target="_blank" rel="noreferrer">Adam Reid</a> bringing the event story to life through commentary and broadcast direction.'
      },
      {
        src: 'images/motorsport/Casters.JPG',
        alt: 'Casters commentating the event at Motorsport UK'
      },
      {
        src: 'images/motorsport/Casters 2.JPG',
        alt: 'Additional caster team members at the Motorsport UK desk'
      },
      {
        src: 'images/motorsport/Obsurver.JPG',
        alt: 'Observers watching the Motorsport UK broadcast and event systems'
      },
      {
        src: 'images/motorsport/Setting up Obseruver.JPG',
        alt: 'Observer setup during Motorsport UK production'
      },
      {
        src: 'images/motorsport/Soundboard.JPG',
        alt: 'Soundboard and production desk at Motorsport UK'
      },
      {
        src: 'images/motorsport/Funny meme.JPG',
        alt: 'Crew joking together as the event wrapped up',
        caption: 'As the event wrapped up, the crew were teasing one another, and I captured the moment I joked that one of their trouser zips was down to distract them.'
      }
    ]
  },
  'nse-finals': {
    title: 'NSE Finals 2026',
    description: 'Huge thanks to Gin Rai and NTU for inviting me to photograph the behind-the-scenes production at the NSE British University Esports Championship Finals at Confetti X. This set showcases the crew, broadcast setup, and event coordination, rather than the tournament matches themselves.',
    images: [
      { src: 'images/nse/NSE_Photots_0003_P1069237.jpg', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1023675.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1023745.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024018.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024035.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024097.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024115.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024137.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024146.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024187.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024360.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024394.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1024415.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1034592.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1068301.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1068468.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1068773.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1068804.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1068827.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1069068.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1069190.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1069291 (1).JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079317.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079348.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079393.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079565.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079647.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079723.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079789.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079846.JPG', alt: 'NSE behind-the-scenes production photo' },
      { src: 'images/nse/P1079980.JPG', alt: 'NSE behind-the-scenes production photo' }
    ]
  },
  'outdoors-friends': {
    title: 'Outdoors & Friends',
    description: 'A simple photo bundle for outdoor moments with friends. More images will be added over time to keep this collection growing.',
    images: [
            {
        src: 'images/Personal Images/cachedImage2.png',
        alt: 'Friends enjoying a relaxed outdoor hangout'
      },
      {
        src: 'images/Personal Images/P1070287.JPG',
        alt: 'Friend coming over to enjoy a game of Pool'
      },
      {
        src: 'images/Personal Images/P1033929.JPG',
        alt: 'Friend taking a moment to enjoy and relax'
      },
      {
        src: 'images/Personal Images/P1033931.JPG',
        alt: 'Friend taking a moment to enjoy and relax'

      },
      {
        src: 'images/Personal Images/P1033936.JPG',
        alt: 'Friend taking a moment to enjoy and relax'
      },
      {
        src: 'images/Personal Images/P1033862.JPG',
        alt: 'Buddies capturing a relaxed street moment'
      },
      {
        src: 'images/Personal Images/P1023789.JPG',
        alt: 'Friends sitting together outdoors'
      },
      {
        src: 'images/Personal Images/cachedImage.png',
        alt: 'Outdoor portrait with natural light'
      },
      {
        src: 'images/Personal Images/cachedImage1.png',
        alt: 'Candid outdoor moment with friends'
      },
      {
        src: 'images/Personal Images/P1070258.JPG',
        alt: 'Outdoor friends photoshoot'
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

  img.addEventListener('load', () => {
    if (img.naturalWidth === 4000 && img.naturalHeight === 6000) {
      img.classList.add('fit-large');
    }

    img.style.width = '100%';
    img.style.height = '100%';
  });
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

    let hasVisibleCards = false;

    cards.forEach((card) => {
      const category = card.dataset.category;
      const matches = filter === 'all' || category === filter;
      card.style.display = matches ? 'block' : 'none';

      if (matches) {
        hasVisibleCards = true;
      }
    });

    if (filter === 'sports' && !hasVisibleCards) {
      filterMessage.classList.add('show');
    } else {
      filterMessage.classList.remove('show');
    }
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
