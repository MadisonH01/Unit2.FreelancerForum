const freelancers = [
  { name: "Lillian", price: 50, occupation: "Programmer" },
  { name: "Carol", price: 70, occupation: "Programmer" },
  { name: "Christine", price: 60, occupation: "Programmer" },
  { name: "Alice", price: 30, occupation: "Writer" },
  { name: "Scarlet", price: 35, occupation: "Barber" },
  { name: "Bob", price: 50, occupation: "Teacher" },
  { name: "Aaron", price: 40, occupation: "Teacher" },
  { name: "Elias", price: 65, occupation: "Writer" },
  { name: "Jacob", price: 35, occupation: "Choreographer" },
  { name: "Kevin", price: 35, occupation: "Barber" },
];
const maxFL = 25;
const occupations = [
  "Teacher",
  "Writer",
  "Programmer",
  "Barber",
  "Choreographer",
];
const names = [
  "Lillian",
  "Jessie",
  "Taylor",
  "Justin",
  "Devin",
  "Keegan",
  "Simon",
  "Riley",
  "John",
];
const prices = [30, 40, 50, 60, 70, 80, 90, 100];
const addRFLIntervalId = setInterval(renderRandomFreelancer, 3000);

// This function renders the freelancers onto the page.
function renderFreeLancers() {
  const freelancersContainer = document.querySelector("ul");
  freelancersContainer.innerHTML = "";

  freelancers.forEach((Freelancer) => {
    const element = document.createElement("li");
    element.textContent = `${Freelancer.name} - ${Freelancer.occupation} - ${Freelancer.price}`;
    freelancersContainer.appendChild(element);
  });
}

// This function renders randomized freelancers onto the page
function renderRandomFreelancer() {
  if (freelancers.length >= maxFL) {
    clearInterval(addRFLIntervalId);
    return;
  }
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation =
    occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = prices[Math.floor(Math.random() * prices.length)];

  const freelancersContainer = document.querySelector("#Freelancer");
  const element = document.createElement("li");
  element.textContent = `${randomName} - ${randomOccupation} - ${randomPrice}`;
  freelancersContainer.appendChild(element);
  freelancers.push({
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  });

  renderFreeLancers();
  updatePageWithMinimumAveragePrice();
}

// This function calculates the average price
function calculateAveragePrice(freelancers) {
  const totalPrices = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.price,
    0
  );
  return totalPrices / freelancers.length;
}

// This function updates the page with each new freelancer added.
function updatePageWithMinimumAveragePrice() {
  const minimumAveragePrice = calculateAveragePrice(freelancers);
  const averagePriceContainer = document.querySelector("#AveragePrice");
  averagePriceContainer.textContent = `Minimum Average Price: ${minimumAveragePrice.toFixed(
    2
  )}`;
}

renderFreeLancers();
updatePageWithMinimumAveragePrice();
