const content = document.getElementById("content");

export function createHome() {
  const welcome = document.createElement("h1");
  welcome.classList.add("home");
  welcome.textContent = "Welcome!";
  content.appendChild(welcome);

  const bestChicken = document.createElement("p");
  bestChicken.classList.add("home");
  bestChicken.textContent =
    "It's the best ingredients. The spiciest spices. All prepared with loving care! And always delivered with a friendly smile. That's the Los Pollos Hermanos promise.";
  content.appendChild(bestChicken);

  const quote = document.createElement("p");
  quote.classList.add("home");
  quote.id = "quote";
  quote.textContent = "-Gus Fring, Owner and Proprietor";
  content.appendChild(quote);
}
