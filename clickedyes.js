window.onload = function () {
  let link = document.getElementsByTagName("a")[0];
  let btn = document.getElementsByTagName("button")[0];

  btn.addEventListener("click", () => {
    link.click();
  });
};
