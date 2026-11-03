const images = [
  {
    src: "https://picsum.photos/id/10/500/350",
    caption: "Forest"
  },
  {
    src: "https://picsum.photos/id/29/500/350",
    caption: "Snowy mountain"
  },
  {
    src: "https://picsum.photos/id/33/500/350",
    caption: "Sunshine grassfield"
  },
  {
    src: "https://picsum.photos/id/42/500/350",
    caption: "Coffee cups"
  },
  {
    src: "https://picsum.photos/id/48/500/350",
    caption: "Old Macbook"
  },
  {
    src: "https://picsum.photos/id/54/500/350",
    caption: "Coastline cliffs"
  },
  {
    src: "https://picsum.photos/id/64/500/350",
    caption: "Girl with sunglasses"
  },
  {
    src: "https://picsum.photos/id/76/500/350",
    caption: "Green Bike on shed"
  },
  {
    src: "https://picsum.photos/id/96/500/350",
    caption: "Game Controller"
  }
];

const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeBtn");

// Build thumbnails
images.forEach((item, index) => {
  const img = document.createElement("img");
  img.src = item.src;
  img.alt = item.caption;
  img.dataset.index = index;
  gallery.appendChild(img);
});

// ONE listener using event delegation
gallery.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    const index = event.target.dataset.index;
    const selected = images[index];

    modalImg.src = selected.src;
    modalImg.alt = selected.caption;
    modalCaption.textContent = selected.caption;

    modal.style.display = "flex";
  }
});

// Close button
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Click background to close
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});