const images = document.querySelectorAll('[data-src]');

function preloadImage(img) {
  const src = img.getAttribute('data-src');
  if (!src) {
    return;
  }

  img.src = src;
}

const imgOptions = {
  threshold: 0,
  rootMargin: '0px 0px 100px 0px',
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      preloadImage(entry.target);
      imgObserver.unobserve(entry.target);
    }
  });
}, imgOptions);

images.forEach((image) => {
  imgObserver.observe(image);
});

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

const loader = document.createElement('div');
loader.id = 'loader';

var loadTime;

const allImages = document.querySelectorAll('img');
allImages.forEach((allImages) => {
  allImages.addEventListener('click', (e) => {
    var str = allImages.src;
    var hdImage = str.slice(0, str.length - 4) + '-hd.jpg';
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.classList.add('hd-lightbox');
    img.src = hdImage;
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild);
    }
    lightbox.appendChild(loader);
    lightbox.appendChild(img);
    loadLightboxImg();
  });

  function loadLightboxImg() {
    loadTime = setTimeout(showImg, 500);
  }

  function showImg() {
    document.getElementsByClassName('hd-lightbox')[0].style.display = 'flex';
    lightbox.removeChild(loader);
  }
});

lightbox.addEventListener('click', (e) => {
  lightbox.classList.remove('active');
});
