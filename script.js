
AOS.init();


// Sélectionnez tous les éléments avec la classe "language-image"
const languageImages = document.querySelectorAll('.language-image');

languageImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        const tooltipId = this.getAttribute('data-tooltip');
        const tooltip = document.querySelector(`.tooltip[data-tooltip-target="${tooltipId}"]`);
        if (tooltip) {
            tooltip.style.display = 'block';
            tooltip.style.opacity = '1';
        }
    });

    image.addEventListener('mouseleave', function() {
        const tooltipId = this.getAttribute('data-tooltip');
        const tooltip = document.querySelector(`.tooltip[data-tooltip-target="${tooltipId}"]`);
        if (tooltip) {
            tooltip.style.display = 'none';
            tooltip.style.opacity = '0';
        }
    });
});



// Sélectionnez tous les éléments avec la classe "tools-image"
const toolsImages = document.querySelectorAll('.tools-image');

toolsImages.forEach(image => {
    image.addEventListener('mouseenter', function() {
        const tooltipId = this.getAttribute('data-tooltip');
        const tooltip = document.querySelector(`.tooltiptool[data-tooltip-target="${tooltipId}"]`);
        if (tooltip) {
            tooltip.style.display = 'block';
            tooltip.style.opacity = '1';
        }
    });

    image.addEventListener('mouseleave', function() {
        const tooltipId = this.getAttribute('data-tooltip');
        const tooltip = document.querySelector(`.tooltiptool[data-tooltip-target="${tooltipId}"]`);
        if (tooltip) {
            tooltip.style.display = 'none';
            tooltip.style.opacity = '0';
        }
    });
});



//------------------ Cercles des Langages  ------------------//

// Pour Python
let numberOfFilledCirclesPython = 4;
const circlesPython = document.querySelectorAll('.ratingpython .circle');
circlesPython.forEach((circle, index) => {
    if(index < numberOfFilledCirclesPython) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour Java
let numberOfFilledCirclesJava = 3;
const circlesJava = document.querySelectorAll('.ratingjava .circle');
circlesJava.forEach((circle, index) => {
    if(index < numberOfFilledCirclesJava) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour C++
let numberOfFilledCircles = 3;

const circles = document.querySelectorAll('.rating .circle');

circles.forEach((circle, index) => {
    if(index < numberOfFilledCircles) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour C
let numberOfFilledCirclesC = 2;
const circlesC = document.querySelectorAll('.ratingc .circle');
circlesC.forEach((circle, index) => {
    if(index < numberOfFilledCirclesC) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour C#
let numberOfFilledCirclesCSharp = 2;
const circlesCSharp = document.querySelectorAll('.ratingcsharp .circle');
circlesCSharp.forEach((circle, index) => {
    if(index < numberOfFilledCirclesCSharp) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});


// Pour HTML
let numberOfFilledCirclesHTML = 4;
const circlesHTML = document.querySelectorAll('.ratinghtml .circle');
circlesHTML.forEach((circle, index) => {
    if(index < numberOfFilledCirclesHTML) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour CSS
let numberOfFilledCirclesCSS = 4;
const circlesCSS = document.querySelectorAll('.ratingcss .circle');
circlesCSS.forEach((circle, index) => {
    if(index < numberOfFilledCirclesCSS) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour JS
let numberOfFilledCirclesJS = 2;
const circlesJS = document.querySelectorAll('.ratingjs .circle');
circlesJS.forEach((circle, index) => {
    if(index < numberOfFilledCirclesJS) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour Lua
let numberOfFilledCirclesLua = 3;
const circlesLua = document.querySelectorAll('.ratinglua .circle');
circlesLua.forEach((circle, index) => {
    if(index < numberOfFilledCirclesLua) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour SQL 
let numberOfFilledCirclesSQL = 4;
const circlesSQL = document.querySelectorAll('.ratingsql .circle');
circlesSQL.forEach((circle, index) => {
    if(index < numberOfFilledCirclesSQL) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});


//------------------ Cercles des Tools  ------------------//

// Pour IntelliJ
let numberOfFilledCirclesIntelliJ = 4;
const circlesIntelliJ = document.querySelectorAll('.ratingintellij .circle');
circlesIntelliJ.forEach((circle, index) => {
    if(index < numberOfFilledCirclesIntelliJ) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour DataGrip
let numberOfFilledCirclesDataGrip = 4;
const circlesDataGrip = document.querySelectorAll('.ratingdatagrip .circle');
circlesDataGrip.forEach((circle, index) => {
    if(index < numberOfFilledCirclesDataGrip) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour PyCharm
let numberOfFilledCirclesPyCharm = 4;
const circlesPyCharm = document.querySelectorAll('.ratingpycharm .circle');
circlesPyCharm.forEach((circle, index) => {
    if(index < numberOfFilledCirclesPyCharm) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour CLion
let numberOfFilledCirclesCLion = 4;
const circlesCLion = document.querySelectorAll('.ratingclion .circle');
circlesCLion.forEach((circle, index) => {
    if(index < numberOfFilledCirclesCLion) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour Fleet
let numberOfFilledCirclesFleet = 0;
const circlesFleet = document.querySelectorAll('.ratingfleet .circle');
circlesFleet.forEach((circle, index) => {
    if(index < numberOfFilledCirclesFleet) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});