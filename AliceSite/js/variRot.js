var currentPage = 0;

function rotateNav() {
    var navs = document.querySelectorAll("nav li");

    for (var i = 0; i < navs.length; i++) {
        rando = (Math.random() * 60) - 30;

        navs[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        navs[i].style.msTransform = "rotate(" + rando + "deg)";
        navs[i].style.transform = "rotate(" + rando + "deg)";
        gotoPage(3);
    }
}

function pageTurner(increment) {
    currentPage += increment;
    var pages = document.getElementsByClassName("page");
    if (currentPage > pages.length - 1) {
        currentPage = 0;
    }
    if (currentPage < 0) {
        currentPage = pages.length - 1;
    }


    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";

    }
    pages[currentPage].style.display = "block";

}
window.onkeydown = function pageTurnerKey(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 37) {
        currentPage -= 1;
    }
    if (keyCode == 39) {
        currentPage += 1;
    }

    var pages = document.getElementsByClassName("page");
    if (currentPage > pages.length - 1) {
        currentPage = 0;
    }
    if (currentPage < 0) {
        currentPage = pages.length - 1;
    }


    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";

    }
    pages[currentPage].style.display = "block";

}

function gotoPage(pageNum) {
    currentPage = pageNum;
    var pages = document.getElementsByClassName("page");


    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";

    }
    pages[currentPage].style.display = "block";
}

window.onload = rotateNav;