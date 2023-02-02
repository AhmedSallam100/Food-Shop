// Active Header Link

let link = document.querySelectorAll(".link")

link.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    link.forEach((ele) => {
      ele.classList.remove("active")
    })
    e.currentTarget.classList.add("active")
  })
})

// Open Menu

let hum = document.querySelector(".open-menu");
let menu = document.querySelector(".nav-menu")
let closem = document.querySelector(".close-menu")
let leftHeader = document.querySelector(".left-header")
let topHome = document.querySelector(".top")

hum.addEventListener("click", () => {
  menu.classList.add("active-3")
})
hum.addEventListener("click", () => {
  leftHeader.classList.add("active-4")
})
hum.addEventListener("click", () => {
  topHome.classList.add("active-5")
})
closem.addEventListener("click", () => {
  menu.classList.remove("active-3")
})
closem.addEventListener("click", () => {
  leftHeader.classList.remove("active-4")
})
closem.addEventListener("click", () => {
  topHome.classList.remove("active-5")
})

// Show Scroll

function scrollTop() {
  const scrollTop = document.getElementById("scroll-up");
  if (this.scrollY >= 650) scrollTop.classList.add("show-scroll");
  else scrollTop.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollTop);