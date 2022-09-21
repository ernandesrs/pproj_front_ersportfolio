const floatingNav = document.querySelector("#floating-nav");

const scroll = document.addEventListener("scroll", function () {
    let top = window.top.scrollY;

    if (top < 525) {
        if (floatingNav.classList.contains("visible-nav"))
            floatingNav.classList.remove("visible-nav");
        return;
    }

    if (floatingNav.classList.contains("visible-nav")) return;

    floatingNav.classList.add("visible-nav");
});