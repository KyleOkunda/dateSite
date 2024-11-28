window.onload = function () {
  var selected = null;
  var snackName = null;

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
      snackName = movie.lastElementChild;
      snackName = snackName.innerText;
      let snackDisplay = document.getElementsByClassName("snackdisplay")[0];
      snackDisplay.innerHTML = "You have chosen " + snackName + ".";
      nextBtn.style.display = "";
    });
    nextBtn.addEventListener("click", () => {
      let link = document.getElementsByTagName("a")[0];

      let params = {
        name: "Boo",
        message: "I chose " + snackName,
      };
      emailjs
        .send("service_n1c3b99", "template_wo7vvhv", params)
        .then(alert("Email sent!"));

      link.click();
    });
  });
};
