// axios
// axios
//   .get("https://www.episodate.com/api/most-popular?page=1")
//   .then(function (response) {
//     // handle success
//     console.log(response);
//     response.data.tv_shows.forEach(function (item) {
//       let img = document.createElement("img");
//       img.src = item.image_thumbnail_path;
//       img.classList.add("Scroll");
//       document.getElementById("imgs").appendChild(img);
//     });
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });

//scroll
ScrollReveal().reveal("#imgs");
ScrollReveal({ reset: true });
ScrollReveal().reveal(".headlines", { delay: 200 });
ScrollReveal().reveal(".middleline", { delay: 200 });
ScrollReveal().reveal(".lastline", { delay: 200 });
