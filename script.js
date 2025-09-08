const tours = [
  {
    id: 1,
    title: "Paris Getaway",
    desc: "Experience the city of love and lights.",
    longDesc:
      "Paris, the City of Light, is a global center for art, fashion, gastronomy, and culture. Stroll along the Seine, marvel at the Eiffel Tower, explore the Louvre Museum, and relax in charming cafes.",
    price: 1200,
    image: "images/paris.jpg",
    locations: [
      {
        name: "Eiffel Tower",
        image: "images/eiff.jpg",
        details: ["Stunning night lights", "Elevator or stairs to top"],
      },
      {
        name: "Louvre Museum",
        image: "images/glass.jpg",
        details: ["World's largest art museum", "Glass pyramid entrance"],
      },
    ],
  },
  {
    id: 2,
    title: "Safari Adventure",
    desc: "Explore the wildlife of Kenya.",
    longDesc:
      "Discover Kenya’s breathtaking savannahs filled with lions, elephants, and giraffes. Experience thrilling game drives, visit Maasai villages, and witness the Great Migration at the Maasai Mara.",
    price: 800,
    image: "images/safari.webp",
    locations: [
      {
        name: "Maasai Mara",
        image: "images/safari.webp",
        details: ["Big Five sightings", "Annual Great Migration"],
      },
      {
        name: "Amboseli National Park",
        image: "images/amboseli.jpg",
        details: ["Stunning Mt. Kilimanjaro views", "Elephant herds"],
      },
    ],
  },
  {
    id: 3,
    title: "Sandy Beaches, Maldives",
    desc: "Have your time in the crystal clear beaches",
    longDesc:
      "Experience the ocean ecosystem, while enjoying yourself on the many beaches",
    price: 1800,
    image: "images/maldives.webp",
    locations: [
      {
        name: "Fari Island",
        image: "images/furi.jpg",
        details: ["Fun Nightlife", "Deep-Sea Diving"],
      },
      {
        name: "Milaidhoo",
        image: "images/mal.jpg",
        details: ["Coral Reefs", "Beautiful Sunsets"],
      },
    ],
  },
  {
    id: 4,
    title: "New York City Tour",
    desc: "Discover the city that never sleeps",
    longDesc:
      "New York is a densely populated metropolis built upon a series of islands, renowned for its iconic skyline, relentless energy, and global influence in finance, culture, and commerce. From the neon spectacle of Times Square and the verdant expanse of Central Park to the corporate canyons of Wall Street and the artistic vibrancy of its many neighborhoods, the city offers an unparalleled concentration of ambition, diversity, and unforgettable experiences.",
    price: 2100,
    image: "images/newyork.jpg",
    locations: [
      {
        name: "SoHo",
        image: "images/soho.jpg",
        details: ["Historic Area", "Dining(Food Markets)"],
      },
      {
        name: "Chelsea",
        image: "images/chel.jpg",
        details: ["Art Gallary", "Culture"],
      },
    ],
  },
    {
    id: 5,
    title: "Anime City, Japan",
    desc: "Explore the birth place of Anime(Japansese Cartoon)",
    longDesc:"Shibuya is a vibrant, neon-drenched special ward in Tokyo, Japan, famously known for its iconic Scramble Crossing, where waves of pedestrians converge from all directions, and as a global epicenter of youth fashion, culture, and cutting-edge technology.",
    price: 1100,
    image: "images/tokyo.webp",
    locations: [
      {
        name: "Shibuya Scramble Crossing",
        image: "images/shiii.jpg",
        details: ["Unigqu Area", "Architecture"],
      },
      {
        name: "Shibuya Parco",
        image: "images/par.webp",
        details: ["Shopping Centre", "Art Gallery"],
      },
    ],
  },
   {
    id: 6,
    title: "Machu Picchu, Peru",
    desc: "Visit one of the seven wonders of the world",
    longDesc:"Nestled high in the Andes Mountains, Machu Picchu is the awe-inspiring ruins of a 15th-century Inca citadel, renowned for its sophisticated dry-stone construction that fused huge blocks without mortar, its dramatic mountainous setting, and its mysterious abandonment centuries ago. This UNESCO World Heritage Site, often shrouded in mist, stands as a breathtaking testament to Inca engineering and spirituality, offering visitors an unforgettable glimpse into the past.",
    price: 1900,
    image: "images/macchuuuu.jpg",
    locations: [
      {
        name: "Huayna Picchu",
        image: "images/hu.jpg",
        details: [""],
      },
      {
        name: "the Guardian's House",
        image: "images/guar.webp",
        details: [""],
      },
    ],
  },
  {
    id: 7,
    title: "Historic Italy",
    desc: "Explore Italy's Rich Contributions",
    longDesc:"Italy is a Mediterranean country of stunning geographic diversity, celebrated for its unparalleled artistic and architectural treasures from the Roman Empire and Renaissance, its globally influential cuisine, and its vibrant cultural life. From the romantic canals of Venice and the ancient ruins of Rome to the rolling vineyards of Tuscany and the dramatic Amalfi Coast, its landscapes are as rich and varied as its profound historical legacy.",
    price: 499,
    image: "images/italy.webp",
    locations: [
      {
        name: "Pulgia",
        image: "images/pug.webp",
        details: ["Unique Architure", "Beautiful Beaches"],
      },
      {
        name: "Florenece",
        image: "images/flo.jpg",
        details: ["Renaissance art", "History"],
      },
    ],
  },
   {
    id: 8,
    title: "Lost at sea in Crotia",
    desc: "Explore its beaches",
    longDesc:"Croatia is a stunning Central European and Mediterranean country celebrated for its remarkably beautiful and rugged Adriatic coastline, which is dotted with over a thousand islands, and its wealth of preserved historical architecture from Roman times to the Renaissance. From the ancient city walls of Dubrovnik and the Roman ruins of Split's Diocletian's Palace to the pristine waterfalls of Plitvice Lakes National Park, it offers a captivating blend of history, culture, and breathtaking natural scenery.",
    price: 3000,
    image: "images/croo.webp",
    locations: [
      {
        name: "Zagreb",
        image: "images/zag.jpg",
        details: ["Unique Food", "Vibrant Nightlife"],
      },
      {
        name: "Dubrovnik",
        image: "images/dub.avif",
        details: ["Medieval charm", "History Sites"],
      },
    ],
  },
  {
    id: 9,
    title: "Meet History in Bhutan",
    desc: "Visit the colorful cultural tapestry and deeply rooted country.",
    longDesc:"Nestled high in the Eastern Himalayas, Bhutan is a profoundly unique and mystical kingdom famously dedicated to prioritizing Gross National Happiness over economic growth, which is reflected in its pristine landscapes, deeply preserved Buddhist culture, and traditional architecture. From the breathtaking cliffside Tiger's Nest Monastery (Paro Taktsang) and imposing dzong fortresses to its lush, untouched valleys and strong sense of national identity, Bhutan offers a rare and serene journey into a world guided by spiritual values and a profound respect for nature.",
    price: 1000,
    image: "images/bhu.jpg",
    locations: [
      {
        name: "Tiger's Nest (Paro Taktsang)",
        image: "images/tiger.jpg",
        details: ["Unique Buildings", "Understand the spiritual significance"],
      },
      {
        name: "Tashichho Dzong in Thimphu",
        image: "images/tas.jpg",
        details: ["Bhutans Landmark"],
      },
    ],
  },
];

const tourList = document.getElementById("tourList");
const modal = document.getElementById("tourModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const bookingForm = document.getElementById("bookingForm");
const totalPriceEl = document.getElementById("totalPrice");
let selectedTour = null;

function displayTours(filterText = "", priceLimit = "") {
  tourList.innerHTML = "";
  const filteredTours = tours.filter(
    (t) =>
      t.title.toLowerCase().includes(filterText.toLowerCase()) &&
      (priceLimit === "" || t.price <= priceLimit)
  );
  filteredTours.forEach((t) => {
    const div = document.createElement("div");
    div.className = "tour-card";
    div.innerHTML = `
      <img src="${t.image}" alt="${t.title}">
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <p><strong>Price:</strong> $${t.price}</p>
      <button class="btn" onclick="openModal(${t.id})">View Details</button>
    `;
    tourList.appendChild(div);
  });
}

function openModal(id) {
  selectedTour = tours.find((t) => t.id === id);

  document.getElementById("modalTitle").innerText = selectedTour.title;
  document.getElementById("modalDesc").innerText = selectedTour.longDesc;
  document.getElementById("modalPrice").innerText = selectedTour.price;
  document.getElementById("modalImage").src = selectedTour.image;
  totalPriceEl.innerText = selectedTour.price;

  const modalLocations = document.getElementById("modalLocations");
  modalLocations.innerHTML = "";
  selectedTour.locations.forEach((loc) => {
    const div = document.createElement("div");
    div.className = "location-card";
    div.innerHTML = `
      <img src="${loc.image}" alt="${loc.name}">
      <h4>${loc.name}</h4>
      <ul>${loc.details.map((d) => `<li>${d}</li>`).join("")}</ul>
    `;
    modalLocations.appendChild(div);
  });

  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}

document.getElementById("travelers").addEventListener("input", (e) => {
  if (selectedTour) {
    const total = selectedTour.price * e.target.value;
    totalPriceEl.innerText = total;
  }
});

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const travelers = document.getElementById("travelers").value;
  const total = selectedTour.price * travelers;

  const booking = { tour: selectedTour.title, name, email, travelers, total };
  let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
  bookings.push(booking);
  localStorage.setItem("bookings", JSON.stringify(bookings));

  alert("Booking Successful!");
  bookingForm.reset();
  closeModal();
});

document.getElementById("search").addEventListener("input", (e) => {
  displayTours(e.target.value, document.getElementById("priceFilter").value);
});

document.getElementById("priceFilter").addEventListener("change", (e) => {
  displayTours(document.getElementById("search").value, e.target.value);
});

displayTours();
