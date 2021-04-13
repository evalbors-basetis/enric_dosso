class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
  <header>
    <div class="logo">
      <a href="./index.html"><img src="images/logo_Ruta_EDO_01.png" alt="logotipo" width="240" height="auto"></a>
    </div>
    <div>
      <ul class="menu">
        <li class="menu-selected"><a href="./1_vinebre.html">Vinebre</a></li>
        <li><button>Tortosa</button></li>
        <li><button>Monteserrat</button></li>
        <li><button>Tarragona</button></li>
        <li><button>Barcelona</button></li>
        <li><button>Castellón</button></li>
      </ul>
    </div>
  </header>
  `
  ;
  }
}

window.customElements.define('my-header', MyHeader);
