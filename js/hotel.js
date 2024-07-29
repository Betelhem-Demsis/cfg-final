// restaurant.js
const restaurantInfo = [
  {
    hotelimg: "./image/sheraton.jpg",
    hotelname: "Sheraton Hotel",
    Address: "Addis Ababa, Ethiopia",
    category: "International",
  },
  {
    hotelimg: "./image/OIP.jpg",
    hotelname: "Hilton Hotel",
    Address: "Addis Ababa, Ethiopia",
    category: "International",
  },
  {
    hotelimg: "./image/haile.jpg",
    hotelname: "Haile Resort",
    Address: "Addis Ababa, Ethiopia",
    category: "International",
  },
  {
    hotelimg: "./image/totot.jpg",
    hotelname: "Totot Hotel",
    Address: "Addis Ababa, Ethiopia",
    category: "Traditional",
  },
];

function filterHotels(category) {
  console.log(`Filtering hotels by category: ${category}`); // Debugging statement
  const hotelsList = document.getElementById("hotels_list");
  hotelsList.innerHTML = "";

  restaurantInfo
    .filter(hotel => category === "All_hotels" || hotel.category === category)
    .forEach(hotel => {
      const hotelDiv = document.createElement("div");
      hotelDiv.className = "hotel";
      
      const hotelImg = document.createElement("img");
      hotelImg.src = hotel.hotelimg;
      hotelImg.alt = hotel.hotelname;
      
      const hotelDetailDiv = document.createElement("div");
      hotelDetailDiv.className = "hotel_detail";
      
      const hotelName = document.createElement("h3");
      hotelName.textContent = hotel.hotelname;
      
      const hotelAddress = document.createElement("p");
      hotelAddress.textContent = hotel.Address;
      
      hotelDetailDiv.appendChild(hotelName);
      hotelDetailDiv.appendChild(hotelAddress);
      hotelDiv.appendChild(hotelImg);
      hotelDiv.appendChild(hotelDetailDiv);
      hotelsList.appendChild(hotelDiv);
    });
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  console.log("Document is ready. Initializing...");
  filterHotels('All_hotels');
});
