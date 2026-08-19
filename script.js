const revealItems = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });
revealItems.forEach((item) => revealObserver.observe(item));

const popup = document.getElementById('videoPopup');
const popupVideo = document.getElementById('popupVideo');
const closeButton = document.querySelector('.close-btn');

function closePopup() {
  if (!popup) return;
  popup.classList.remove('active');
  popupVideo.src = '';
}

function openYouTubeVideo(videoId) {
  if (!popup || !videoId) return;
  popupVideo.src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  popup.classList.add('active');
  closeButton?.focus();
}

document.querySelectorAll('.project-card').forEach((card) => {
  card.addEventListener('click', () => openYouTubeVideo(card.dataset.videoId));
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openYouTubeVideo(card.dataset.videoId);
    }
  });
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Play ${card.querySelector('h3')?.textContent || 'project'} video`);
});

closeButton?.addEventListener('click', closePopup);
popup?.addEventListener('click', (event) => {
  if (event.target === popup) closePopup();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') closePopup();
});

