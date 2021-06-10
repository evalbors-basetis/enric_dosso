class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
      <div class="d-flex justify-content-between">
        <small class="">Enric d’Osso® 2021</small>
        <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </footer>
  `
  ;
  }
}

window.customElements.define('my-footer', MyFooter);
