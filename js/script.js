let themeToggler = document.querySelector("#theme-toggler");

themeToggler.addEventListener("click", function () {
  
    themeToggler.classList.toggle("fa-sun");
    document.body.classList.toggle("active");
  darkMode()
  
  
  
});

function checkMode() {
  const darkOn = localStorage.getItem("dark");
  if (darkOn) {
    localStorage.setItem("dark", "on");
    document.body.classList.add("active");
    themeToggler.classList.add("fa-sun");
  } else {
    document.body.classList.remove("active");
    localStorage.clear();
    themeToggler.classList.remove("fa-sun");
  }
  
}

function darkMode() {
    const sol = themeToggler.classList.contains("fa-sun")
  if (sol) {
    
    localStorage.setItem("dark", "on");
    document.body.classList.add("active");
    
  } else {
    document.body.classList.remove("active");
    localStorage.clear();
  }
}

checkMode();


let menuMobile = document.querySelector("#menu-btn");
let header = document.querySelector("#mobile");
menuMobile.onclick = () => {
  header.classList.toggle("mobile");
  if (header.classList.contains("mobile")) {
    header.classList.add("mobile");
  } else {
    header.classList.remove("mobile");
  }
};



