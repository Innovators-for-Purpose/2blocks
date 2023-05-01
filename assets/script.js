function showMenu() {
  console.log("CLICK THE THING");
  // makes the menu visible
  const menu = document.getElementById("mobile-menu");
  menu.classList.add("visible");
  // adds the dark overlay over the screen
  const background = document.getElementById("black-overlay-mobile");
  background.classList.add("visible");
}

function closeMenu() {
  // hides the menu
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("visible");
  // removes the dark overlay
  const background = document.getElementById("black-overlay-mobile");
  background.classList.remove("visible");
}



function muteAudio() {
  console.log("Audio Mutes");

  // state: audio is playing
  // change: we want to mute the audio
  // TODO
  const volumeButtonAudio = document.getElementById("myAudio");
  volumeButtonAudio.pause();
  
  // state: on button is visible
  // change: we want to hide the on button
  const volumeButtonOn = document.getElementById("volume-button-on");
  volumeButtonOn.classList.remove("visible");
 
  // state: mute button is NOT visible
  // change: we want to show the mute button
  const volumeButtonOff = document.getElementById("volume-button-off");
  volumeButtonOff.classList.add("visible");
}


function playAudio() {
  console.log("Audio Plays")
 
  // state: Mute is on
  // change: we want to unmute the audio
  const volumeButtonAudio = document.getElementById("myAudio");
  volumeButtonAudio.play();

  // state: on button is invisible
  // change: we want to show the on button
  const volumeButtonOn = document.getElementById("volume-button-on");
  volumeButtonOn.classList.add("visible");

  // state: mute button is = visible
  // change: we want to hide the mute button
  const volumeButtonOff = document.getElementById("volume-button-off");
  volumeButtonOff.classList.remove("visible");

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
      <a href="index.html">
          <div class="container-logo-title">
                <img class="TwoBlocksLogoNav"src="TwoBlocksLogo Nav.png">
                <span class="top-nav-heading">Let's Change The Narrative</span>
          </div>  
      </a>
      
      <div class="container-desktop-button-pages">
          <a href="our-potential.html">
              <div class= "button-pages desktop-button-page-font">Our Potential!!!!</div>
          </a>
          
          <a href="our-success.html">
              <div class= "button-pages desktop-button-page-font">Our Success </div>
          </a>
          
          <a href="our-voice.html">
              <div class= "button-pages desktop-button-page-font">Our Voice </div>
          </a>
          
          <a href="https://hoverlay.io/space/2i9">
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