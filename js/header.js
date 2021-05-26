class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <header>
    
    </header>
  `
  ;
  }
}

window.customElements.define('my-header', MyHeader);
