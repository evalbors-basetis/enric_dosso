const vinebreData = [
  {
      image: "images/1_vinebre/vinebre_01.jpg",
      title: "Título de la foto 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a elit sed elementum. Praesent sodales sapien eu magna dapibus consectetur. Sed sed lacinia velit. Suspendisse a tellus risus. Ut ligula lorem, tristique vel libero non, interdum sollicitudin ligula. Nullam massa leo, eleifend sit amet fermentum sed, ornare vitae mauris. Ut in est sed tortor tincidunt mollis elementum ut nunc. Praesent dictum, est non porttitor aliquet, nunc lacus tempus dui, dapibus porta odio felis eget arcu. Vivamus eget dui nec nulla tristique posuere.",
      context: "Maecenas quis magna sem. Integer ut rutrum dui, vitae suscipit eros. Nunc in ligula a justo commodo laoreet tristique sit amet dolor. Praesent ut est in erat pulvinar volutpat. Quisque euismod congue ipsum id accumsan.",
      experience: "Pellentesque euismod nibh ac ornare elementum. Mauris nibh mauris, fermentum sed lobortis a, fringilla ut tortor."
  },
  {
      image: "images/1_vinebre/vinebre_02.jpg",
      title: "Título de la foto 2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a elit sed elementum. Praesent sodales sapien eu magna dapibus consectetur. Sed sed lacinia velit. Suspendisse a tellus risus. Ut ligula lorem, tristique vel libero non, interdum sollicitudin ligula. Nullam massa leo, eleifend sit amet fermentum sed, ornare vitae mauris. Ut in est sed tortor tincidunt mollis elementum ut nunc. Praesent dictum, est non porttitor aliquet, nunc lacus tempus dui, dapibus porta odio felis eget arcu. Vivamus eget dui nec nulla tristique posuere.",
      context: "Maecenas quis magna sem. Integer ut rutrum dui, vitae suscipit eros. Nunc in ligula a justo commodo laoreet tristique sit amet dolor. Praesent ut est in erat pulvinar volutpat. Quisque euismod congue ipsum id accumsan.",
      experience: "Pellentesque euismod nibh ac ornare elementum. Mauris nibh mauris, fermentum sed lobortis a, fringilla ut tortor."
  },
  {
      image: "images/1_vinebre/vinebre_03.jpg",
      title: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis a elit sed elementum. Praesent sodales sapien eu magna dapibus consectetur. Sed sed lacinia velit. Suspendisse a tellus risus. Ut ligula lorem, tristique vel libero non, interdum sollicitudin ligula. Nullam massa leo, eleifend sit amet fermentum sed, ornare vitae mauris. Ut in est sed tortor tincidunt mollis elementum ut nunc. Praesent dictum, est non porttitor aliquet, nunc lacus tempus dui, dapibus porta odio felis eget arcu. Vivamus eget dui nec nulla tristique posuere.",
      context: "",
      experience: ""
  }
]

const formatParsedDataGlide = (data) =>{
  return(
    `
    <div class="container-carrousel">
      <div class="carrousel">
        <div class="glide">
          <div class="glide__track" data-glide-el="track">
            <ul class="glide__slides">
              ${data.map(({image, title, description, context, experience}) =>{
                return(
                  `<li class="glide__slide">
                    <div class="section">
                      <div class="image-container">
                        <img src=${image} alt="" />

                        <div class="link-map">
                          <div class="vertical-line"></div>
                            <a>Ver en el mapa</a>
                          </div>
                        </div>
                        <div class="text-container">
                          <p>${description}</p>
                          <button class="accordion">
                            <img class="static" src="images/eye.png" alt="" />
                            <img class="active" src="images/eye.gif" alt="" />
                            Experiencia espiritual
                            <img
                                class="icon"
                                src="images/icon-arrow.svg"
                                alt="arrow dropdown"
                            />
                          </button>
                        <div class="panel">
                          <p>${context}</p>
                        </div>
                      </div>
                    </div>
                  </li>`
                )
              }).join('')}
            </ul>
          </div>
          <div class="glide__arrows" data-glide-el="controls">
          <button
          class="glide__arrow glide__arrow--left"
          data-glide-dir="<"
          >
          <span class=""
          ><img
          src="./images/arrow-left-brown.svg"
          alt="flecha a la izquierda"
          /></span>
          </button>
          <button
          class="glide__arrow glide__arrow--right"
          data-glide-dir=">"
          >
          <span class=""
          ><img
          src="./images/arrow-right-brown.svg"
          alt="flecha a la derecha"
          /></span>
          </button>
          </div>
          <div class="glide__bullets" data-glide-el="controls[nav]">
          <button class="glide__bullet" data-glide-dir="=0">1</button>
          <button class="glide__bullet" data-glide-dir="=1">2</button>
          <button class="glide__bullet" data-glide-dir="=2">3</button>
          <button class="glide__bullet" data-glide-dir="=3">4</button>
          </div>
        </div>
      </div>
    </div>
    `
    )
}

const parsedData = formatParsedDataGlide(vinebreData)

