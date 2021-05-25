fetch("./content/vinebre.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    const html = data
      .map((content) => {
        return `
          <li class="">
          <div class="section">
            <div class="image-container">
              <img src="${content.image}" alt="" />
            </div>
            <div class="text-container">
              <p class="title">${content.title}</p>
              <p class="title">${content.description}</p>
            </div>
            </div>
          </li>   
      `;
      })
      .join(" ");
    document.querySelector("#list").insertAdjacentHTML("afterbegin", html);
  })
  .catch((error) => {
    console.log(error);
  });


/* CARROUSEL GLIDE  
    */
