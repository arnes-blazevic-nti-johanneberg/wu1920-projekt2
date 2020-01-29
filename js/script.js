function toggleMeny() {
    document.querySelector(".navlinks").classList.toggle("navactive")
    document.querySelector(".burger").classList.toggle("toggle")
}
    document.querySelector(".burger").addEventListener("click", toggleMeny)