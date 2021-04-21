class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
      <p>
        Enric d’Osso® 2021
      </p> 
      <img src="images/instagram-icon.svg" alt="">
    </footer>
  `
  ;
  }
}

window.customElements.define('my-footer', MyFooter);
