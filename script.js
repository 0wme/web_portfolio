
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


// Nombre d'étoiles pour la partie C++ //
let numberOfFilledCircles = 3; // Ce nombre peut être modifié comme vous le souhaitez

const circles = document.querySelectorAll('.rating .circle');

circles.forEach((circle, index) => {
    if(index < numberOfFilledCircles) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour C
let numberOfFilledCirclesC = 2; // Ce nombre peut être modifié comme vous le souhaitez
const circlesC = document.querySelectorAll('.ratingc .circle');
circlesC.forEach((circle, index) => {
    if(index < numberOfFilledCirclesC) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour C#
let numberOfFilledCirclesCSharp = 2; // Ce nombre peut être modifié comme vous le souhaitez
const circlesCSharp = document.querySelectorAll('.ratingcsharp .circle');
circlesCSharp.forEach((circle, index) => {
    if(index < numberOfFilledCirclesCSharp) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});


// Pour HTML
let numberOfFilledCirclesHTML = 4; // Ce nombre peut être modifié comme vous le souhaitez
const circlesHTML = document.querySelectorAll('.ratinghtml .circle');
circlesHTML.forEach((circle, index) => {
    if(index < numberOfFilledCirclesHTML) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour CSS
let numberOfFilledCirclesCSS = 4; // Ce nombre peut être modifié comme vous le souhaitez
const circlesCSS = document.querySelectorAll('.ratingcss .circle');
circlesCSS.forEach((circle, index) => {
    if(index < numberOfFilledCirclesCSS) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});

// Pour JS
let numberOfFilledCirclesJS = 2; // Ce nombre peut être modifié comme vous le souhaitez
const circlesJS = document.querySelectorAll('.ratingjs .circle');
circlesJS.forEach((circle, index) => {
    if(index < numberOfFilledCirclesJS) {
        circle.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
        circle.style.backgroundColor = "transparent";
    }
});