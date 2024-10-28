window.onload = function () {
  let imgSect = document.getElementsByClassName("image")[0];
  let images = Array.from(imgSect.children);
  console.log(images);
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

  let link = document.getElementsByTagName("a")[0];
  let backBtn = document.getElementsByTagName("button")[0];
  backBtn.addEventListener("click", () => {
    link.click();
  });
};
