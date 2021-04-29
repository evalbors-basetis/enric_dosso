fetch("./content/1_vinebre.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    const html = data.map(content => {
        return `
        <div class="section">
          <div class="image-container">
            <img src="${content.image}" alt="" />
          </div>
          <div class="text-container">
            <p class="title">${content.title}</p>
            <p class="title">${content.description}</p>
          </div>
        </div>

      `
    })
    .join(" ");
    document.querySelector('#list').insertAdjacentHTML("afterbegin", html);  
  })
  .catch(error => {
    console.log(error);
  });



 /*  .then(function (data) {
    for (i = 0; i < data.length; i++) {
      // console.log(data[i])

      for (let content in data[i]) {
      // console.log(content, data[i][content]);
       
        let list = document.getElementById('list');

        let image = document.getElementsByClassName('image');
        let title = document.getElementsByClassName('title');
        let description = document.getElementsByClassName('description');


      }
    }
  }); */


/* 
        document.querySelector(".image").src = data[0].image;
        document.querySelector(".title").innerHTML = data[0].title;
        document.querySelector(".description").innerHTML = data[0].description; 
 */
