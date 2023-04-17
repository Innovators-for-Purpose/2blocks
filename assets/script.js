function showMenu() {
  console.log("CLICK THE THING");
  // makes the menu visible
  const menu = document.getElementById("mobile-menu");
  menu.classList.add("visible");
  // adds the dark overlay over the screen
}

function closeMenu() {
  // hides the menu
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("visible");
  // removes the dark overlay
}

function createComponent(templateId, cssPath, template) {
  // puts the template html into a <template></template> element
  const templateElement = document.createElement("template");
  templateElement.setAttribute("id", templateId);
  templateElement.innerHTML = template;
  document.body.appendChild(templateElement);

  // in html:
  //   <header-component></header-component>
  customElements.define(
    templateId,
    class extends HTMLElement {
      constructor() {
        super();
        // get the <template>
        const template = document.getElementById(templateId);
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.appendChild(template.content.cloneNode(true));

        // Apply external styles to the shadow DOM
        const linkElem = document.createElement("link");
        linkElem.setAttribute("rel", "stylesheet");
        linkElem.setAttribute("href", cssPath);

        // Attach the created element to the shadow DOM
        shadowRoot.appendChild(linkElem);
      }
    }
  );
}

// creates <header-component></header-component>
createComponent("header-component", "./assets/sample.page_v2.css", `
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <div class="container-topnav-desktop p-left p-right">
      <a href="#">
          <div class="container-logo-title">
                <img class="TwoBlocksLogoNav"src="TwoBlocksLogo Nav.png">
                <span class="top-nav-heading">Let's Change The Narrative</span>
          </div>  
      </a>
      
      <div class="container-desktop-button-pages">
          <a href="#">
              <div class= "button-pages desktop-button-page-font">Our Potential!!!!</div>
          </a>
          
          <a href="#">
              <div class= "button-pages desktop-button-page-font">Our Success </div>
          </a>
          
          <a href="#">
              <div class= "button-pages desktop-button-page-font">Our Voice </div>
          </a>
          
          <a href="#">
              <div class= "button-pages desktop-button-page-font">Can't Wait</div>
          </a>
      </div>
  </div>
  
  <div class="container-topnav-mobile p-left p-right">
      <img class="TwoBlocksLogoNav"src="TwoBlocksLogo Nav.png">
      <span class="top-nav-heading rectangle">Let's Change The Narrative</span>
      <span onclick="showMenu()" class="hamburger-menu material-symbols-outlined">
          menu
      </span>
  </div>
`);