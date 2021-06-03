class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
      <nav class="fixed">
        <a class="logo" href="index.html">
          <img class="logo-home" src="images/logo-responsive.svg" alt="" />
        </a>
        <ul class="menu-items">
          <li><a class="" href="el-proyecto.html">El proyecto</a></li>
          <li class="dropdown">
            <a class="" href="javascript:void(0)" class="dropbtn">La ruta</a>
            <div class="dropdown-content">
              <a href="vinebre.html">Vinebre</a>
              <a href="#">Tortosa</a>
              <a href="#">Montserrat</a>
              <a href="#">Tarragona</a>
              <a href="#">Barcelona</a>
              <a href="#">Castellón</a>
            </div>
          </li>
          <li><a class="" href="personaliza-experiencia.html">Personaliza tu experiencia</a></li>
        </ul>
        <span class="btn_menu">
          <a href="">
            <i class="fa fa-bars"></i>
          </a>
        </span>
      </nav>
    </header>
  `
  ;
  }
}

window.customElements.define('my-header', MyHeader);
