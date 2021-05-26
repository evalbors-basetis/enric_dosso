/* addEventListener('DOMContentLoad', () => {
    const btn_menu = document.querySelector('.btn_menu')

    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_items = document.querySelector('.menu_items')
            menu_items.classList.toggle('show')
        })
    }
}) */

function myFunction() {
  let header_responsive = document.getElementById("header-responsive");
  const btn_menu = document.querySelector('.btn_menu');
  const open = document.getElementById('.open');
  const close = document.getElementById('.close');


  btn_menu.addEventListener("click", () => {
    const menu_items = document.querySelector(".menu_items");
    header_responsive.classList.toggle("responsive");
    open.classList.add("hide");
    close.classList.delete("hide");
  });
}
