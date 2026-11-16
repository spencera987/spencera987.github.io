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
  // Injecting the free open-source proxy from cors.dev explicitly for ZenQuotes traffic
  const proxyUrl = "https://proxy.cors.dev/";
  const apiUrl = "https://zenquotes.io/api/today";

  try {
    const response = await fetch(proxyUrl + apiUrl);
    if (!response.ok) throw new Error("API or Proxy network error");
    
    const data = await response.json(); 
    
    // ZenQuotes returns an array of objects: [{ q: "text", a: "author", h: "html" }]
    if (Array.isArray(data) && data.length > 0) {
      document.getElementById("quote-text").innerText = `"${data[0].q}"`;
      document.getElementById("quote-author").innerText = `— ${data[0].a}`;
    }
  } catch (error) {
    // Reliable hardcoded backup if client has strict extension blocks
    document.getElementById("quote-text").innerText = "The only limit to our realization of tomorrow will be our doubts of today.";
    document.getElementById("quote-author").innerText = "— Franklin D. Roosevelt";
    console.error("ZenQuotes Fetch Error:", error);
  }
}
fetchQuoteOfTheDay();

//------------------------------------------------------------------------------------
// Tab functionality
function openCity(evt, category) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(category).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();