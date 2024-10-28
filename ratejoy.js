window.onload = function () {
  const range = document.getElementsByTagName("input")[0];
  const rangeValue = document.getElementsByTagName("p")[0];
  const stars = document.getElementsByClassName("stars")[0];
  const next = document.getElementsByTagName("button")[0];
  const link = document.getElementsByTagName("a")[0];
  stars.style.display = "none";
  next.style.display = "none";

  range.max = 10;
  range.min = 0;
  range.value = 0;

  range.addEventListener("input", () => {
    rangeValue.innerText = range.value;
    next.style.display = "";

    if (range.value <= 2) {
      stars.style.display = "none";
      rangeValue.style.color = "red";
      rangeValue.setAttribute("class", "");
    } else if (range.value <= 3) {
      stars.style.display = "none";
      rangeValue.style.color = "orangered";
      rangeValue.setAttribute("class", "");
    } else if (range.value <= 6) {
      stars.style.display = "none";
      rangeValue.style.color = "rgb(255, 153, 0)";
      rangeValue.setAttribute("class", "");
    } else if (range.value <= 9) {
      stars.style.display = "none";
      rangeValue.style.color = "green";
      rangeValue.setAttribute("class", "");
    } else if (range.value == 10) {
      stars.style.display = "";
      rangeValue.style.color = "rgb(255, 72, 102)";
      rangeValue.setAttribute("class", "ten");
    }
  });
  next.addEventListener("click", () => {
    if (range.value < 10) {
      alert(
        "Cant believe you actually picked a number that isn't 10. \n That's too bad coz we are still doing this. \n Damn beautiful bastard!"
      );
    }

    link.click();
  });
};
