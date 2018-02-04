function rotateNav() {
    var navs = document.querySelectorAll("nav li");

    for (var i = 0; i < navs.length; i++) {
        rando = (Math.random() * 60) - 30;

        navs[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        navs[i].style.msTransform = "rotate(" + rando + "deg)";
        navs[i].style.transform = "rotate(" + rando + "deg)";
    }

}

window.onload = rotateNav;