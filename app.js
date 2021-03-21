let navBar = document.querySelector(".navbar"), // select navbar from the dom
  toggleButton = document.querySelector(".toggle-btn"); // select button with class of toggle-btn from the dom

const showMenu = () => {
  navBar.classList.toggle("show"); // add a toggle method to the class to change classes anytime you click on it
  console.log(navBar); // check the console to see how the classes change dynamically
  navBar.classList.contains(
    "show"
  ) /* if navbar class contains show,change the content of the button to x and add a class of show else remove the class of show and add a span */
    ? ((toggleButton.textContent = "x"), toggleButton.classList.add("show"))
    : ((toggleButton.innerHTML = `<span class="line"></span>`),
      toggleButton.classList.remove("show"));
};

toggleButton.addEventListener("click", showMenu); // Add a click event to the button to trigger a showMenu function

/*  check css to see the class of show and i used the span to make a hamburger icon with css instead of downloading from
font awesome */
