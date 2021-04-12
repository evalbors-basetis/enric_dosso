class MyHeader extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
   `
  ;
  }
}

window.customElements.define('my-header', MyHeader);
