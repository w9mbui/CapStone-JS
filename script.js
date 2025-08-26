const tours = [
  { id: 1, title: "Paris Getaway", desc: "Experience the city of love and lights.", price: 1200 },
  { id: 2, title: "Safari Adventure", desc: "Explore the wildlife of Kenya.", price: 800 },
  { id: 3, title: "Beach Holiday Maldives", desc: "Relax in crystal clear waters.", price: 1500 },
  { id: 4, title: "New York City Tour", desc: "Discover the city that never sleeps.", price: 1000 },
  { id: 5, title: "Tokyo Experience", desc: "Dive into the heart of Japan.", price: 1800 },
  
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
  const filteredTours = tours.filter(t =>
    t.title.toLowerCase().includes(filterText.toLowerCase()) &&
    (priceLimit === "" || t.price <= priceLimit)
  );
  filteredTours.forEach(t => {
    const div = document.createElement("div");
    div.className = "tour-card";
    div.innerHTML = `
      <h3>${t.title}</h3>
      <p>${t.desc}</p>
      <p><strong>Price:</strong> $${t.price}</p>
      <button class="btn" onclick="openModal(${t.id})">View Details</button>
    `;
    tourList.appendChild(div);
  });
}

function openModal(id) {
  selectedTour = tours.find(t => t.id === id);
  modalTitle.innerText = selectedTour.title;
  modalDesc.innerText = selectedTour.desc;
  modalPrice.innerText = selectedTour.price;
  totalPriceEl.innerText = selectedTour.price;
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
