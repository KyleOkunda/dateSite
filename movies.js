window.onload = function () {
  var selected = null;
  var movieName = null;

  //To export this variable use the followinf syntax
  // const myModule  = require('./file1');
  // console.log(myModule.myVariable);

  var nextBtn = document.getElementById("next");
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
  });

  nextBtn.addEventListener("click", function () {
    let link = document.getElementsByTagName("a")[0];

    let params = {
      name: "Boo",
      message: "I chose " + movieName,
    };

    emailjs
      .send("service_n1c3b99", "template_wo7vvhv", params)
      .then((Response) => {
        alert("Email sent!");
        link.click();
      });
  });
};
