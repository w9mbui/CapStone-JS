const tours = [
  {
    id: 't1',
    title: 'Weekend in Nairobi',
    destination: 'Nairobi',
    nights: 2,
    basePrice: 180,
    img: 'https://i0.wp.com/seeafricatoday.com/wp-content/uploads/2022/05/Nairobi-national-Park.jpg?resize=1920%2C1080&ssl=1',
    short: 'City highlights, markets and a national park day trip.'
  },
  {
    id: 't2',
    title: 'Safari Adventure (Masai Mara)',
    destination: 'Masai Mara',
    nights: 3,
    basePrice: 540,
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60',
    short: 'Big five game drives, cultural visits and lodge stay.'
  },
  {
    id: 't3',
    title: 'Day In The Sunny Beaches',
    destination: 'Diani',
    nights: 4,
    basePrice: 320,
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60',
    short: 'White sand beaches, snorkeling and relaxation.'
  },
  {
    id: 't4',
    title: 'Mount Kenya Trek',
    destination: 'Mount Kenya',
    nights: 5,
    basePrice: 420,
    img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60',
    short: 'Guided trek, camping and highland views.'
  }
];

const toursGrid = document.getElementById("toursGrid");
const searchInput = document.getElementById("searchInput");
const maxPrice = document.getElementById("maxPrice");
const priceLabel = document.getElementById("priceLabel");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");
const bookingsList = document.getElementById("bookingsList");
const newsletterForm = document.getElementById("newsletterForm");
const newsletterMsg = document.getElementById("newsletterMsg");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();
renderTours(tours);
renderBookings();
function renderTours(list) {
  toursGrid.innerHTML = "";
  list.forEach(tour => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${tour.img}" alt="${tour.title}">
      <h3>${tour.title}</h3>
      <p>${tour.destination} - $${tour.price}</p>
      <p>${tour.description}</p>
      <button onclick="openBooking(${tour.id})">Book</button>
    `;
    toursGrid.appendChild(card);
  });
}
searchInput.addEventListener("input", () => {
  filterTours();
});

maxPrice.addEventListener("input", () => {
  priceLabel.textContent = maxPrice.value;
  filterTours();
});

function filterTours() {
  const query = searchInput.value.toLowerCase();
  const max = Number(maxPrice.value);
  const filtered = tours.filter(t =>
    t.destination.toLowerCase().includes(query) && t.price <= max
  );
  renderTours(filtered);
}
function openBooking(id) {
  const tour = tours.find(t => t.id === id);
  modalBody.innerHTML = `
    <h2>${tour.title}</h2>
    <p>${tour.destination} - $${tour.price}</p>
    <form id="bookingForm">
      <input type="text" id="name" placeholder="Your name" required><br>
      <input type="email" id="email" placeholder="Your email" required><br>
      <input type="number" id="travelers" min="1" value="1"><br>
      <p>Total: $<span id="totalPrice">${tour.price}</span></p>
      <button type="submit">Confirm Booking</button>
    </form>
  `;
  modal.classList.remove("hidden");
  const travelersInput = document.getElementById("travelers");
  const totalPrice = document.getElementById("totalPrice");
  travelersInput.addEventListener("input", () => {
    const num = Number(travelersInput.value) || 1;
    totalPrice.textContent = tour.price * num;
  });


}