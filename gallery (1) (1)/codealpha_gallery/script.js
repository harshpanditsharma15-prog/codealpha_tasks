const photos = [
  {
    cat: 'mountains',
    title: 'Alpine Morning',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1000&q=82',
    desc: 'First light washing over a high ridgeline after a cold, clear night.',
    ratio: '4 / 5'
  },
  {
    cat: 'water',
    title: 'Misty Gorge',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=82',
    desc: 'Cool morning vapor rising from a river-cut valley.',
    ratio: '3 / 4'
  },
  {
    cat: 'forests',
    title: 'Pine Canopy',
    image: 'https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=1000&q=82',
    desc: 'Tall pines reaching into clean mountain air.',
    ratio: '4 / 5'
  },
  {
    cat: 'mountains',
    title: 'Blue Ridge Layers',
    image: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1000&q=82',
    desc: 'Soft mountain silhouettes fading into the distance.',
    ratio: '16 / 11'
  },
  {
    cat: 'forests',
    title: 'Cedar Rain',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=82',
    desc: 'A damp stand of old trees holding mist between the trunks.',
    ratio: '3 / 4'
  },
  {
    cat: 'water',
    title: 'Forest Stream',
    image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1000&q=82',
    desc: 'Clear water slipping over stones beneath green shade.',
    ratio: '3 / 2'
  },
  {
    cat: 'wildlife',
    title: 'Highland Elk',
    image: 'https://images.unsplash.com/photo-1500479694472-551d1fb6258d?auto=format&fit=crop&w=1000&q=82',
    desc: 'An elk standing alert in a cool mountain meadow.',
    ratio: '4 / 5'
  },
  {
    cat: 'water',
    title: 'Silver Cascade',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=82',
    desc: 'White water dropping through moss and shaded stone.',
    ratio: '4 / 5'
  },
  {
    cat: 'mountains',
    title: 'Snowline Trail',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=82',
    desc: 'A winding trail below snow-bright peaks.',
    ratio: '4 / 5'
  },
  {
    cat: 'wildlife',
    title: 'Quiet Antlers',
    image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=1000&q=82',
    desc: 'A watchful deer pausing at the edge of open meadow.',
    ratio: '5 / 4'
  },
  {
    cat: 'forests',
    title: 'Moss Path',
    image: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?auto=format&fit=crop&w=1000&q=82',
    desc: 'A narrow green path disappearing into soft woodland light.',
    ratio: '3 / 4'
  },
  {
    cat: 'mountains',
    title: 'Granite Pass',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=82',
    desc: 'Layered peaks and lingering snow above the tree line.',
    ratio: '16 / 11'
  },
  {
    cat: 'water',
    title: 'Ocean Breath',
    image: 'https://images.unsplash.com/photo-1439405326854-014607f694d7?auto=format&fit=crop&w=1000&q=82',
    desc: 'Rolling sea under a pale open sky.',
    ratio: '5 / 4'
  },
  {
    cat: 'forests',
    title: 'Fern Understory',
    image: 'https://images.unsplash.com/photo-1476231682828-37e571bc172f?auto=format&fit=crop&w=1000&q=82',
    desc: 'Fresh green growth carpeting the forest floor after rain.',
    ratio: '4 / 5'
  },
  {
    cat: 'wildlife',
    title: 'Hummingbird Pause',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1000&q=82',
    desc: 'A tiny bird suspended for one bright second.',
    ratio: '4 / 5'
  },
  {
    cat: 'water',
    title: 'Glacial Lake',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=82',
    desc: 'Still blue water mirroring the shoulder of the mountains.',
    ratio: '3 / 2'
  },
  {
    cat: 'wildlife',
    title: 'Snowy Owl',
    image: 'https://images.unsplash.com/photo-1516233758813-a38d024919c5?auto=format&fit=crop&w=1000&q=82',
    desc: 'Soft winter plumage against a muted northern field.',
    ratio: '4 / 5'
  },
  {
    cat: 'mountains',
    title: 'Cloudbreak Summit',
    image: 'https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=1000&q=82',
    desc: 'A brief opening in the weather over a dark mountain wall.',
    ratio: '5 / 4'
  },
  {
    cat: 'water',
    title: 'Rainforest Falls',
    image: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1000&q=82',
    desc: 'A narrow waterfall framed by tropical green.',
    ratio: '4 / 5'
  },
  {
    cat: 'forests',
    title: 'Redwood Stillness',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=82',
    desc: 'Tall trunks, filtered light, and the hush of deep shade.',
    ratio: '3 / 4'
  },
  {
    cat: 'wildlife',
    title: 'Mountain Goat',
    image: 'https://images.unsplash.com/photo-1520552159191-e28a1d9f0d83?auto=format&fit=crop&w=1000&q=82',
    desc: 'Sure-footed movement across a high rocky slope.',
    ratio: '3 / 4'
  },
  {
    cat: 'water',
    title: 'Tidal Glass',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=82',
    desc: 'A calm shoreline just before the wind changes direction.',
    ratio: '16 / 11'
  },
  {
    cat: 'wildlife',
    title: 'Fox in Goldgrass',
    image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1000&q=82',
    desc: 'A red fox moving through late-season grass at dusk.',
    ratio: '4 / 5'
  },
  {
    cat: 'forests',
    title: 'Autumn Canopy',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=82',
    desc: 'A woodland ceiling of gold, green, and amber leaves.',
    ratio: '3 / 2'
  },
  {
    cat: 'wildlife',
    title: 'Elephant Crossing',
    image: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1000&q=82',
    desc: 'A calm elephant walking through open habitat.',
    ratio: '5 / 4'
  },
  {
    cat: 'mountains',
    title: 'Morning Crags',
    image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1000&q=82',
    desc: 'Rugged stone faces catching the first warm light.',
    ratio: '4 / 5'
  },
  {
    cat: 'forests',
    title: 'Green Silence',
    image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1000&q=82',
    desc: 'A quiet forest corridor wrapped in clean green air.',
    ratio: '3 / 4'
  },
  {
    cat: 'water',
    title: 'Lake Mirror',
    image: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1000&q=82',
    desc: 'Still water reflecting a wide and open sky.',
    ratio: '16 / 11'
  },
  {
    cat: 'wildlife',
    title: 'Giraffe Light',
    image: 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?auto=format&fit=crop&w=1000&q=82',
    desc: 'A tall silhouette moving through golden habitat.',
    ratio: '4 / 5'
  },
  {
    cat: 'mountains',
    title: 'Misty Highlands',
    image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=82',
    desc: 'Soft cloud cover drifting over steep green slopes.',
    ratio: '5 / 4'
  },
  {
    cat: 'forests',
    title: 'Birch Glow',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=82',
    desc: 'Bright trunks and layered leaves under soft daylight.',
    ratio: '4 / 5'
  },
  {
    cat: 'water',
    title: 'Rockpool Blue',
    image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=82',
    desc: 'Clear coastal water gathering between dark rocks.',
    ratio: '3 / 2'
  },
  {
    cat: 'wildlife',
    title: 'Eagle Watch',
    image: 'https://images.unsplash.com/photo-1511823794984-b87716139b88?auto=format&fit=crop&w=1000&q=82',
    desc: 'A sharp-eyed bird resting above the open landscape.',
    ratio: '3 / 4'
  },
  {
    cat: 'mountains',
    title: 'Golden Ridge',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1000&q=82',
    desc: 'Sunlit ridges rolling into a hazy horizon.',
    ratio: '16 / 11'
  },
  {
    cat: 'forests',
    title: 'Wild Ferns',
    image: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=82',
    desc: 'Fresh fern leaves layered across the forest floor.',
    ratio: '4 / 5'
  },
];

const grid = document.getElementById('grid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const favorites = new Set();
const likedPhotos = new Set();
let currentFilter = 'all';
let currentSearch = '';
let currentIndex = 0;
let revealObserver;

function imgUrl(index) {
  return photos[index].image;
}

function categoryLabel(cat) {
  return cat.charAt(0).toUpperCase() + cat.slice(1);
}

function render() {
  grid.innerHTML = '';

  photos.forEach((p, i) => {
    const frame = document.createElement('div');
    frame.className = 'frame';
    frame.dataset.cat = p.cat;
    frame.dataset.index = i;
    frame.dataset.title = p.title.toLowerCase();
    frame.style.setProperty('--ratio', p.ratio);
    frame.innerHTML = `
      <div class="photo-actions">
        <button class="favorite-btn" type="button" aria-label="Save ${p.title}" aria-pressed="false">♡</button>
        <button class="like-btn" type="button" aria-label="Like ${p.title}" aria-pressed="false">👍</button>
      </div>
      <div class="img-wrap">
        <img src="${imgUrl(i)}" alt="${p.title}" loading="lazy">
        <div class="caption-overlay">
          <div class="cap-text">
            <span class="cap-title">${p.title}</span>
            ${p.desc}
          </div>
        </div>
      </div>
    `;

    const img = frame.querySelector('img');
    const wrap = frame.querySelector('.img-wrap');
    img.addEventListener('load', () => wrap.classList.add('loaded'));
    img.addEventListener('error', () => wrap.classList.add('loaded'));

    frame.querySelector('.favorite-btn').addEventListener('click', (event) => {
      event.stopPropagation();
      toggleFavorite(i, event.currentTarget);
    });
    frame.querySelector('.like-btn').addEventListener('click', (event) => {
      event.stopPropagation();
      toggleLike(i, event.currentTarget);
    });

    frame.addEventListener('click', () => openLightbox(i));
    grid.appendChild(frame);
  });

  setupReveal();
  applyFilter();
}

function setupReveal() {
  if (revealObserver) revealObserver.disconnect();

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.frame').forEach(frame => revealObserver.observe(frame));
}

function toggleFavorite(index, button) {
  if (favorites.has(index)) {
    favorites.delete(index);
  } else {
    favorites.add(index);
  }

  const active = favorites.has(index);
  button.classList.toggle('active', active);
  button.setAttribute('aria-pressed', String(active));
  button.textContent = active ? '♥' : '♡';
}

function toggleLike(index, button) {
  if (likedPhotos.has(index)) {
    likedPhotos.delete(index);
  } else {
    likedPhotos.add(index);
  }

  const active = likedPhotos.has(index);
  button.classList.toggle('active', active);
  button.setAttribute('aria-pressed', String(active));
}

function matchesFilters(index) {
  const p = photos[index];
  const categoryMatch = currentFilter === 'all' || p.cat === currentFilter;
  const searchMatch = !currentSearch || p.title.toLowerCase().includes(currentSearch);
  return categoryMatch && searchMatch;
}

function applyFilter() {
  let visibleCount = 0;

  document.querySelectorAll('.frame').forEach(frame => {
    const index = Number(frame.dataset.index);
    const match = matchesFilters(index);
    frame.classList.toggle('hidden', !match);
    if (match) visibleCount += 1;
  });

  emptyState.classList.toggle('show', visibleCount === 0);
}

document.getElementById('categories').addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));
  e.target.classList.add('active');
  currentFilter = e.target.dataset.cat;
  applyFilter();
});

searchInput.addEventListener('input', (e) => {
  currentSearch = e.target.value.trim().toLowerCase();
  applyFilter();
});

function visibleIndices() {
  return photos
    .map((p, i) => i)
    .filter(i => matchesFilters(i));
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const shareBtn = document.getElementById('shareBtn');
const downloadBtn = document.getElementById('downloadBtn');

function openLightbox(index) {
  currentIndex = index;
  showImage();
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function showImage() {
  const p = photos[currentIndex];
  const visible = visibleIndices();
  const position = visible.indexOf(currentIndex) + 1;
  const total = visible.length;

  lightboxImg.classList.remove('show');
  lightboxImg.alt = p.title;
  downloadBtn.href = imgUrl(currentIndex);
  downloadBtn.setAttribute('download', `${p.title.toLowerCase().replace(/\s+/g, '-')}.jpg`);

  const newImg = new Image();
  newImg.src = imgUrl(currentIndex);
  newImg.onload = () => {
    lightboxImg.src = newImg.src;
    requestAnimationFrame(() => lightboxImg.classList.add('show'));
  };

  lightboxCaption.innerHTML = `<span class="num">${position} of ${total}</span> &nbsp; &middot; &nbsp; ${categoryLabel(p.cat)}`;
}

function step(dir) {
  const visible = visibleIndices();
  if (!visible.length) return;
  const pos = visible.indexOf(currentIndex);
  const nextPos = (pos + dir + visible.length) % visible.length;
  currentIndex = visible[nextPos];
  showImage();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

shareBtn.addEventListener('click', async () => {
  const url = imgUrl(currentIndex);

  try {
    await navigator.clipboard.writeText(url);
    shareBtn.textContent = '✓ Copied';
    setTimeout(() => { shareBtn.textContent = '↗ Share'; }, 1300);
  } catch {
    window.prompt('Copy image link:', url);
  }
});

document.getElementById('prevBtn').addEventListener('click', () => step(-1));
document.getElementById('nextBtn').addEventListener('click', () => step(1));
document.getElementById('closeBtn').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});

render();
