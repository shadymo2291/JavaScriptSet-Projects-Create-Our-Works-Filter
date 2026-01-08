let listElements = document.querySelectorAll("li");
let divElements = document.querySelectorAll(".workContainer div");
let container = document.querySelector(".workContainer");

listElements.forEach((li) => {
  li.addEventListener("click", (e) => {
    // Remove "selected" class from All
    listElements.forEach((ele) => {
      ele.classList.remove("selected");
    });

    // add "selected" class to The Selected Element
    e.currentTarget.classList.add("selected");

    // selecting the element
    divElements.forEach((ele) => {
      ele.style.display = "flex";

      if (li.classList.contains("selected")) {
        if (li.classList.contains(ele.className) === false) {
          ele.style.display = "none";
          container.style.setProperty(
            "grid-template-columns",
            "repeat(auto-fill, minmax(200px, 1fr))"
          );

          //   container.style.cssText =
          //     "display: flex;justify-content: center;width: fit-content;margin: auto;";
        }
      }
      if (li.className === "all selected") {
        divElements.forEach((ele) => (ele.style.display = "flex"));
        container.style.setProperty(
          "grid-template-columns",
          "repeat(auto-fill, minmax(150px, 1fr))"
        );
      }
    });
  });
});
