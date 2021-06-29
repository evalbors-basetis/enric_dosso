class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
      <nav class="navbar navbar-expand-lg navbar fixed">
        <a class="logo" href="index.html">
          <img
            class="logo-home original"
            src="images/logo-background-dark.svg"
            alt=""
          />
          <img
            class="logo-home icon"
            src="images/logo-responsive-background-dark.svg"
            alt=""
          />
          <img
          class="logo-inside-pages"
          src="images/logo-responsive-background-dark.svg"
          alt=""
        />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa fa-bars" aria-hidden="true open-menu"></i>
          <!-- <i class="fas fa-times close-menu"></i> -->
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link text-link" href="el-proyecto.html">El proyecto</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                La ruta
              </a>
              <div
                class="dropdown-menu text-link"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="vinebre-presentation.html">Vinebre</a>
                <a class="dropdown-item" href="#">Montserrat</a>
                <a class="dropdown-item" href="#">Tortosa</a>
                <a class="dropdown-item" href="#">Barcelona</a>
                <a class="dropdown-item" href="#">Tarragona</a>
                <a class="dropdown-item" href="#">Desierto Las Palmas</a>
                <a class="dropdown-item" href="#">Gilet</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle text-link"
                href="#"
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Vive la experiencia
              </a>
              <div
                class="dropdown-menu text-link"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="vive-la-experiencia.html">Vinebre</a>
                <a class="dropdown-item" href="#">Montserrat</a>
                <a class="dropdown-item" href="#">Tortosa</a>
                <a class="dropdown-item" href="#">Barcelona</a>
                <a class="dropdown-item" href="#">Tarragona</a>
                <a class="dropdown-item" href="#">Desierto Las Palmas</a>
                <a class="dropdown-item" href="#">Gilet</a>
              </div>
            </li>
          </ul>
        </div>
        
      </nav>
    
  `
  ;
  }
}

window.customElements.define('my-header', MyHeader);
