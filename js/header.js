class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
  <header>
    <div class="logo">
      <a href="./index.html"><img src="images/logo-responsive.svg" alt="logotipo" width="30" height="auto"></a>
    </div>
    <div>
      <ul class="menu">
        <li><a class="menu-selected" href="./1_vinebre.html">Vinebre</a></li>
        <li><a href="">Tortosa</a></li>
        <li><a href="">Monteserrat</a></li>
        <li><a href="">Tarragona</a></li>
        <li><a href="">Barcelona</a></li>
        <li><a href="">Castellón</a></li>
      </ul>
    </div>
  </header>
  `
  ;
  }
}

window.customElements.define('my-header', MyHeader);
