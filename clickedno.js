window.onload = function () {
  let imgSect = document.getElementsByClassName("image")[0];
  let images = Array.from(imgSect.children);

  let img = images[0];
  let counter = 0;

  let slider = setInterval(() => {
    img.replaceWith(images[counter]);
    counter++;
    if (counter == 1 || counter == 2) {
      images[counter - 1].style.display = "none";
      images[counter].style.display = "inline";
    }
    if (counter == 2) {
      clearInterval(slider);
    }
  }, 5000);

  var link = document.getElementsByTagName("a")[0];
  let backBtn = document.getElementsByTagName("button")[0];
  backBtn.addEventListener("click", () => {
    let params = {
      name: "Boo",
      message: "A certain someone just clicked no 💔",
    };

    emailjs
      .send("service_n1c3b99", "template_wo7vvhv", params)
      // wait for the response from the .send then click the link
      .then((Response) => {
        link.click();
      });
  });
};
