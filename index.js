window.onload = function () {
  let yesBtn = document.getElementById("yes");
  let noBtn = document.getElementById("no");

  yesBtn.addEventListener("click", () => {
    let linkYes = document.getElementsByTagName("a")[0];
    linkYes.click();
  });
  noBtn.addEventListener("click", () => {
    let linkNo = document.getElementsByTagName("a")[1];
    linkNo.click();
  });
};
