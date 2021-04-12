class MyHeaderMobile extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header >
    <div class="menu-mobile">
      <div class="logo-mobile">
          <img src="images/logo-responsive.jpg" alt="logotipo" width="44" height="auto">
      </div>
      <div class="nav">
          <input id="abrir-cerrar" name="abrir-cerrar" type="checkbox" value="" />
          <label for="abrir-cerrar" class="toggle-button">
          <span class="cerrar" title="Cerrar">Cerrar</span>
          <span class="abrir" title="Abrir">Abrir</span>
      </label>
      </div>
    </div>
    </header>
  `
  ;
  }
}

window.customElements.define('my-header-mobile', MyHeaderMobile);
