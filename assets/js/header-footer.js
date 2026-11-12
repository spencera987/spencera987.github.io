// Header and Footer JavaScript
// This file contains JavaScript code that is used to create the header and footer components for each sub-page of the site.

//------------------------------------------------------------------------------------
// Define re-usable header component for the site pages. This allows for a single source of truth for the header, which is used on every page.
class myHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header class="site-header">
      <a class="site-name">spenceranderson.xyz</a>

      <nav aria-label="Main navigation">
        <div>
          <a href="../index.html">Home</a>
        </div>

        <div class="nav-projects">
          <a href="../index.html#project-heading">Projects</a>
          <div class="nav-dropdown-menu" id="project-menu"></div>
        </div>

        <div>
          <a href="../index.html#contact-heading">Contact Me</a>
        </div>

        <div class="social-links">
          <a href="https://github.com/spencera987"
            class="social-link"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer">
            <img src="../assets/icons/GitHub_Invertocat_Black_Clearspace.svg" alt="">
          </a>

          <a href="https://www.linkedin.com/in/shander3/"
            class="social-link"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer">
            <img src="../assets/icons/linkedin-svgrepo-com.svg" alt="">
          </a>

          <a href="https://www.instagram.com/spencera987/"
            class="social-link"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer">
            <img src="../assets/icons/instagram-svgrepo-com.svg" alt="">
          </a>
        </div>
      </nav>
    </header>
    `;
  }
}
customElements.define("my-header", myHeader);

//------------------------------------------------------------------------------------
// Define re-usable footer component for the site pages. This allows for a single source of truth for the footer, which is used on every page.
class myFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="site-footer">
      <p>&copy; <span data-current-year></span> spenceranderson.xyz</p>
      <p>Version 1.1.1</p>
    </footer>
    `;
  }
}
customElements.define("my-footer", myFooter);