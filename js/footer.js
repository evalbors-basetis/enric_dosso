class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
      <p>
        Enric d’Osso® 2021
      </p> 
      <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
    </footer>
  `
  ;
  }
}

window.customElements.define('my-footer', MyFooter);
