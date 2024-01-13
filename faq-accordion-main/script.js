const star = document.querySelector('#h1').addEventListener("click", () => toggle("#p1", "#h1"))
const star2 = document.querySelector('#h2').addEventListener("click", () => toggle("#p2", "#h2"))
const star3 = document.querySelector('#h3').addEventListener("click", () => toggle("#p3", "#h3"))
const star4 = document.querySelector('#h4').addEventListener("click", () => toggle("#p4", "#h4"))

function toggle(tag, tag1) {
    let h = document.querySelector(tag1)
    let p = document.querySelector(tag)
    if (p.classList.contains("none") || h.classList.contains("star")) {
        h.classList.remove("star")
        h.classList.toggle("no-star")
        p.classList.remove("none")
        p.classList.toggle("show")
    }
    else {
        h.classList.remove("no-star")
        h.classList.toggle("star")
        p.classList.remove("show")
        p.classList.toggle("none")
    }
}
