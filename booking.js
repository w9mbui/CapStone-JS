 const bookingList = document.getElementById("bookingList");
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    if (bookings.length === 0) {
      bookingList.innerHTML = "<p>No bookings yet.</p>";
    } else {
      bookings.forEach((b, index) => {
        const div = document.createElement("div");
        div.className = "tour-card";
        div.innerHTML = `
          <h3>${b.tour}</h3>
          <p><strong>Name:</strong> ${b.name}</p>
          <p><strong>Email:</strong> ${b.email}</p>
          <p><strong>Travelers:</strong> ${b.travelers}</p>
          <p><strong>Total Paid:</strong> $${b.total}</p>
          <button class="btn" onclick="cancelBooking(${index})">Cancel</button>
        `;
        bookingList.appendChild(div);
      });
    }

    function cancelBooking(index) {
      bookings.splice(index, 1);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      location.reload(); 
    }