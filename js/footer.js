class MyFooter extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <footer>
   
        <small>Enric d’Osso® 2021</small>
     
      <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
    </footer>
  `
  ;
  }
}

window.customElements.define('my-footer', MyFooter);
