// Site-wide JavaScript
// This file contains JavaScript code that is used throughout the site

//------------------------------------------------------------------------------------
// Update the current year in the footer
const year = document.querySelector("[data-current-year]");

if (year) {
  year.textContent = new Date().getFullYear().toString();
}

//------------------------------------------------------------------------------------
// Build the project dropdown using each card's existing ID and title.
const projectMenu = document.querySelector("#project-menu");

if (projectMenu) {
  const projectLinks = document.querySelectorAll(
    ".project-grid > a.project-card-link"
  );

  projectLinks.forEach((projectLink) => {
    const title = projectLink.querySelector("h3")?.textContent.trim();

    // Skip entries without a title.
    if (!title) return;

    const menuLink = document.createElement("a");
    menuLink.href = projectLink.href;
    menuLink.textContent = title;
    projectMenu.append(menuLink);
  });
}

//------------------------------------------------------------------------------------
// Fetch and display the quote of the day
async function fetchQuoteOfTheDay() {
  try {
    // Fetches from a free, public quotes API
    const response = await fetch('https://allorigins.win');
    const data = await response.json();
    
    if(data && data[0]) {
      document.getElementById('quote-text').innerText = `"${data[0].q}"`;
      document.getElementById('quote-author').innerText = `— ${data[0].a}`;
    }
  } catch (error) {
    // Fallback quote if the API fails
    document.getElementById('quote-text').innerText = "The only limit to our realization of tomorrow will be our doubts of today.";
    document.getElementById('quote-author').innerText = "— Franklin D. Roosevelt";
  }
}
fetchQuoteOfTheDay();



