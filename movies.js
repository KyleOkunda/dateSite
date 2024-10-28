window.onload = function () {
  var selected = null;
  var movieName = null;

  //To export this variable use the followinf syntax
  // const myModule  = require('./file1');
  // console.log(myModule.myVariable);

  let nextBtn = document.getElementById("next");
  nextBtn.style.display = "none";

  var imageSect = document.getElementsByClassName("images")[0];
  var images = Array.from(imageSect.children);
  images.forEach((movie) => {
    movie.addEventListener("click", () => {
      selected = movie;
      movieName = movie.lastElementChild;
      movieName = movieName.innerText;
      let movieDisplay = document.getElementsByClassName("moviedisplay")[0];
      movieDisplay.innerHTML = "You have chosen " + movieName + ".";
      nextBtn.style.display = "";
    });
    nextBtn.addEventListener("click", () => {
      let link = document.getElementsByTagName("a")[0];
      link.click();
    });
  });
};
