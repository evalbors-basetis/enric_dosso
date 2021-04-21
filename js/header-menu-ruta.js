class MyHeaderRuta extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
    <div class="header-container">
      <a href="./index.html"
        ><img
          src="images/logo-responsive.svg"
          alt="logotipo"
          width="30"
          height="auto"
      /></a>
    </div>
    <div>
      <ul class="menu-ruta">
        <li>
          <a class="menu-selected" href="">
            <div class="little-wave vinebre">
              <p>Vinebre</p>
              <svg width="80" height="24">
                <circle
                  cx="40"
                  cy="24"
                  r="16"
                  stroke="#8d6331"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a class="" href="">
            <div class="little-wave tortosa">
              <p>Tortosa</p>
              <svg width="80" height="24">
                <circle
                  cx="40"
                  cy="0"
                  r="16"
                  stroke="#8d6331"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a class="" href="">
            <div class="little-wave montserrat">
              <p>Montserrat</p>
              <svg width="80" height="24">
                <circle
                  cx="40"
                  cy="24"
                  r="16"
                  stroke="#8d6331"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a class="" href="">
            <div class="little-wave tarragona">
              <p>Tarragona</p>
              <svg width="80" height="24">
                <circle
                  cx="40"
                  cy="0"
                  r="16"
                  stroke="#8d6331"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a class="" href="">
            <div class="little-wave barcelona">
              <p>Barcelona</p>
              <svg width="80" height="24">
                <circle
                  cx="40"
                  cy="24"
                  r="16"
                  stroke="#8d6331"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </div>
          </a>
        </li>
        <li>
          <a class="" href="">
            <div class="little-wave castellon">
              <p>Castellón</p>
              <svg width="80" height="24">
                <circle
                  cx="40"
                  cy="0"
                  r="16"
                  stroke="#8d6331"
                  stroke-width="8"
                  fill="transparent"
                />
              </svg>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </header>
  `
  ;
  }
}

window.customElements.define('my-header-ruta', MyHeaderRuta);
