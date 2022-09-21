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

const cookieAlert = document.querySelector("#cookie-alert");

if (!localStorage.getItem("cookie_accept")) {
    cookieAlert.classList.add("show-cookie-alert");
}

if (cookieAlert.classList.contains("show-cookie-alert")) {
    cookieAlert.querySelector(".button-accept").addEventListener("click", function (e) {
        localStorage.setItem("cookie_accept", true);
        cookieAlert.classList.remove("show-cookie-alert");
    });

    cookieAlert.querySelector(".button-close").addEventListener("click", function (e) {
        cookieAlert.classList.remove("show-cookie-alert");
    });
}
