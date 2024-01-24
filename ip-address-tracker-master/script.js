const getIp = document.querySelector(".get-ip");
const ipInput = document.querySelector(".ip-input");
const ipVal = document.querySelector(".ip-val");
const locationVal = document.querySelector(".location-val");
const timezoneVal = document.querySelector(".timezone-val");
const ispVal = document.querySelector(".isp-val");
const map = document.querySelector("#map");

const defaultLatitude = 38.628683;
const defaultLongitude = -92.5659635;

window.addEventListener("load", () => {
  initializeMap(defaultLatitude, defaultLongitude);
});

getIp.addEventListener("submit", async (event) => {
  event.preventDefault(); // Prevents the form from submitting and refreshing the page

  const userInput = ipInput.value;
  console.log("User entered:", userInput);

  let urlIp = `https://geo.ipify.org/api/v2/country?apiKey=at_iNOGK24oVRkDY6mZNJfp3meD9w0vY&ipAddress=${userInput}`;
  console.log("Constructed URL:", urlIp);

  try {
    const responseIp = await fetch(urlIp);
    const dataIp = await responseIp.json();
    let city = dataIp.location.region;
    // city = city.split(" ")[0];
    city === "Dhaka Division" ? (city = "Dhaka") : (city = city);
    console.log(city);
    ipVal.textContent = `${userInput}`;
    locationVal.textContent = `${dataIp.location.region}`;
    timezoneVal.textContent = `UTC ${dataIp.location.timezone}`;
    ispVal.textContent = `${dataIp.isp}`;
    // console.log(data.location.region);
    // console.log(data.location.timezone);
    // console.log(data.isp);

    const getCityCoordinates = async () => {
      let url = `https://nominatim.openstreetmap.org/search?city=${encodeURIComponent(
        city
      )}&format=json`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.length > 0) {
          const latitude = data[0].lat;
          const longitude = data[0].lon;
          console.log(latitude, longitude);
          initializeMap(latitude, longitude);
        } else {
          console.log("Location not found");
        }
      } catch (error) {
        console.error("Error getting city coordinates:", error);
      }
    };

    getCityCoordinates();
  } catch (error) {
    console.error("Error fetching city:", error);
  }
});

let mapInstance = null;

const initializeMap = (latitude, longitude) => {
  try {
    if (mapInstance) {
      mapInstance.remove();
    }

    let map = L.map("map").setView([latitude, longitude], 15);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 21,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map);
    L.circle([latitude, longitude], { radius: 50 }).addTo(map);

    mapInstance = map;
  } catch (error) {
    console.error("Error initializing map:", error);
  }
};
