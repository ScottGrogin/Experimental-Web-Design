var currentPage = 0;

function init() {
    var navs = document.querySelectorAll("nav li");

    for (var i = 0; i < navs.length; i++) {
        rando = (Math.random() * 60) - 30;

        navs[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        navs[i].style.msTransform = "rotate(" + rando + "deg)";
        navs[i].style.transform = "rotate(" + rando + "deg)";

    }

    gotoPage(0);
}

function rotateNav() {
    var navs = document.querySelectorAll("nav li");

    for (var i = 0; i < navs.length; i++) {
        rando = (Math.random() * 60) - 30;

        navs[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        navs[i].style.msTransform = "rotate(" + rando + "deg)";
        navs[i].style.transform = "rotate(" + rando + "deg)";

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
    displayCurrentPage(currentPage);
    rotateNav()

}
window.onkeydown = function pageTurnerKey(e) {
    var keyCode = e.keyCode || e.which;
    if (keyCode == 37) {
        currentPage -= 1;
    }
    if (keyCode == 39) {
        currentPage += 1;
    }
    if (keyCode == 13) {
        document.getElementById("btn").click();
        return;
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
    displayCurrentPage(currentPage);
    rotateNav()

}

function gotoPage(pageNum) {
    currentPage = pageNum;
    var pages = document.getElementsByClassName("page");


    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";

    }
    pages[currentPage].style.display = "block";
    displayCurrentPage(currentPage);

    rotateNav()
}

function pageFind() {
    var pages = document.getElementsByClassName("page");
    var pgNum = document.getElementById("input").value;
    console.log(pgNum);
    if (parseInt(pgNum,10) < pages.length && parseInt(pgNum,10) >= 0 && !(isNaN(parseInt(pgNum)))) {
        gotoPage(parseInt(pgNum,10));
    }

}

function displayCurrentPage(pageNum) {
    document.getElementById("pageNumber").innerHTML = "Current Page: " + pageNum;
}
window.onload = init;