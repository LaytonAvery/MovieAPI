let movieURL = "http://www.omdbapi.com/?s=aquaman&apikey=28351a90";

let displayDetails = document.getElementById("displayDetails");
let textHeading = document.getElementById("textHeading");

displayDetails.addEventListener("click", function () {
  let request = new XMLHttpRequest();
  request.addEventListener("load", function () {
    let result = JSON.parse(this.responseText);
    console.log(result);
    let movieListing = result.Search.map((movieURL) => {
      return `<img src = "${movieURL.Poster}"/>
                 <h2>${movieURL.Title}</h2>`;
    });
    textHeading.innerHTML = movieListing.join("");
  });
  request.open("GET", movieURL);
  request.send();
});
function getMovieDetails(imdbID) {
  let movieDetailRequest = new XMLHttpRequest();
  movieDetailRequest.addEventListener("load", function () {
    console.log(this.responseText);
  });

  movieDetailRequest.open("GET");
}
