// TODO Format Glitcher
// Page num is bounds for rotation
// Page num is likelyhood of page width changing

var currentPage = 0;

function rotateNav() {
    var navs = document.querySelectorAll("nav li");

    for (var i = 0; i < navs.length; i++) {
        var rando = (Math.random() * 60) - 30;

        navs[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        navs[i].style.msTransform = "rotate(" + rando + "deg)";
        navs[i].style.transform = "rotate(" + rando + "deg)";

    }

}

function reset() {
    var paragraph = document.getElementsByTagName("p");
    var rando = 0;
    for (var i = 0; i < paragraph.length; i++) {
        paragraph[i].style.textDecoration = "none";
        paragraph[i].style.textAlign = "justify";
        paragraph[i].style.textTransform = "none";

        paragraph[i].style.letterSpacing = "0pt";
        paragraph[i].style.lineHeight = "100%";

        paragraph[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        paragraph[i].style.msTransform = "rotate(" + rando + "deg)";
        paragraph[i].style.transform = "rotate(" + rando + "deg)";

    }
}

function weirdify() {
    var pages = document.getElementsByClassName("page");
    var paragraph = document.getElementsByTagName("p");
    var weirdPct = currentPage / pages.length;
    
    if (Math.random() < weirdPct) {
        var effectSelector = Math.floor(Math.random() * 7);
        
        switch (effectSelector) {
            case 0:
                for (var i = 0; i < paragraph.length; i++) {
                    paragraph[i].style.textDecoration = "line-through";
                }
                break;
            case 1:
                for (var i = 0; i < paragraph.length; i++) {
                    paragraph[i].style.textAlign = "right";
                }
                break;
            case 2:
                for (var i = 0; i < paragraph.length; i++) {
                    paragraph[i].style.letterSpacing = "-1.5pt";
                }
                break;
            case 3:
                for (var i = 0; i < paragraph.length; i++) {
                    paragraph[i].style.letterSpacing = "2pt";
                }
                break;
            case 4:
                for (var i = 0; i < paragraph.length; i++) {
                    paragraph[i].style.lineHeight = "70%";
                }
                break;
            case 5:
                for (var i = 0; i < paragraph.length; i++) {
                    var rando = (Math.random() * 15) - 7;
                    paragraph[i].style.WebkitTransform = "rotate(" + rando + "deg)";
                    paragraph[i].style.msTransform = "rotate(" + rando + "deg)";
                    paragraph[i].style.transform = "rotate(" + rando + "deg)";
                }
                break;
            case 6:
                var rando = (Math.random() * 15) - 7;
                for (var i = 0; i < paragraph.length; i++) {
                    paragraph[i].style.WebkitTransform = "rotate(" + rando + "deg)";
                    paragraph[i].style.msTransform = "rotate(" + rando + "deg)";
                    paragraph[i].style.transform = "rotate(" + rando + "deg)";
                }
                break;
            default:
                console.log("Something went wrong with weird effect selection");
        }

    }


}

function init() {
    var navs = document.querySelectorAll("nav li");

    for (var i = 0; i < navs.length; i++) {
        var rando = (Math.random() * 60) - 30;

        navs[i].style.WebkitTransform = "rotate(" + rando + "deg)";
        navs[i].style.msTransform = "rotate(" + rando + "deg)";
        navs[i].style.transform = "rotate(" + rando + "deg)";

    }
    reset();

    gotoPage(0);
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
    loadImage(currentPage);
    displayCurrentPage(currentPage);
    reset();
    rotateNav();
    weirdify();

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
    loadImage(currentPage);
    displayCurrentPage(currentPage);
    reset();
    rotateNav();
    weirdify();


}

function gotoPage(pageNum) {
    currentPage = pageNum;
    var pages = document.getElementsByClassName("page");


    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = "none";

    }
    pages[currentPage].style.display = "block";
    loadImage(currentPage);
    displayCurrentPage(currentPage);
    reset();
    rotateNav();
    weirdify();
}

function pageFind() {
    var pages = document.getElementsByClassName("page");
    var pgNum = document.getElementById("input").value;
    console.log(pgNum);
    if (parseInt(pgNum, 10) < pages.length && parseInt(pgNum, 10) >= 0 && !(isNaN(parseInt(pgNum)))) {
        gotoPage(parseInt(pgNum, 10));
    }

}

function displayCurrentPage(pageNum) {
    document.getElementById("pageNumber").innerHTML = "Current Page: " + pageNum;
}

function loadImage(pagenum){
    switch(pagenum){
        case 0:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[0].src ="./img/1book0.png";  
            break;
        case 5:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[1].src ="./img/1book1.png";  
            break;
        case 10:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[2].src ="./img/1book2.png";  
            break;
        case 11:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[3].src ="./img/1book3.png";  
            break;
        case 15:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[4].src ="./img/1book4.png";  
            break;
        case 17:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[5].src ="./img/1book5.png";  
            break;
        case 21:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[6].src ="./img/1book6.png";  
            break;
        case 23:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[7].src ="./img/1book7.png";  
            break;
        case 26:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[8].src ="./img/1book8.png";  
            break;
        case 31:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[9].src ="./img/1book9.png";  
            break;
        case 38:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[10].src ="./img/1book10.png";  
            break;
        case 40:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[11].src ="./img/1book11.png";  
            break;
        case 43:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[12].src ="./img/1book12.png";  
            break;
        case 46:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[13].src ="./img/1book13.png";  
            break;
        case 48:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[14].src ="./img/1book14.png";  
            break;
        case 51:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[15].src ="./img/1book15.png";  
            break;
        case 52:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[16].src ="./img/1book16.png";  
            break;
        case 53:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[17].src ="./img/1book17.png";  
            break;
        case 54:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[18].src ="./img/1book18.png";  
            break;
        case 61:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[19].src ="./img/1book19.png";  
            break;
        case 64:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[20].src ="./img/1book20.png";  
            break;
        case 69:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[21].src ="./img/1book21.png";  
            break;
        case 71:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[22].src ="./img/1book22.png";  
            break;
        case 73:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[23].src ="./img/1book23.png";  
            break;
        case 76:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[24].src ="./img/1book24.png";  
            break;
        case 81:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[25].src ="./img/1book25.png";  
            break;
        case 86:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[26].src ="./img/1book26.png";  
            break;
        case 89:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[27].src ="./img/1book27.png";  
            break;
        case 91:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[28].src ="./img/1book28.png";  
            break;
        case 94:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[29].src ="./img/1book29.png";  
            break;
        case 99:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[30].src ="./img/1book30.png";  
            break;
        case 102:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[31].src ="./img/1book31.png";  
            break;
        case 107:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[32].src ="./img/1book32.png";  
            break;
        case 109:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[33].src ="./img/1book33.png";  
            break;
        case 116:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[34].src ="./img/1book34.png";  
            break;
        case 121:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[35].src ="./img/1book35.png";  
            break;
        case 128:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[36].src ="./img/1book36.png";  
            break;
        case 132:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[37].src ="./img/1book37.png";  
            break;
        case 134:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[38].src ="./img/1book38.png";  
            break;
        case 137:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[39].src ="./img/1book39.png";  
            break;
        case 144:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[40].src ="./img/1book40.png";  
            break;
        case 146:
            var imgLocations = document.getElementsByTagName("img");
            imgLocations[41].src ="./img/1book41.png";  
            break;


        default:
            console.log("nothing to load");

    }

}

window.onload = init;