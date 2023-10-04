
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



function setFilledCircles(ratingClass, numberOfFilledCircles) {
    const circles = document.querySelectorAll(`${ratingClass} .circle`);
    circles.forEach((circle, index) => {
        if(index < numberOfFilledCircles) {
            circle.style.backgroundColor = "rgb(255, 255, 255)";
        } else {
            circle.style.backgroundColor = "transparent";
        }
    });
}

//------------------ Cercles des Langages ------------------//

setFilledCircles('.ratingpython', 4);
setFilledCircles('.ratingjava', 3);
setFilledCircles('.rating', 3);
setFilledCircles('.ratingc', 2);
setFilledCircles('.ratingcsharp', 2);
setFilledCircles('.ratinghtml', 4);
setFilledCircles('.ratingcss', 4);
setFilledCircles('.ratingjs', 2);
setFilledCircles('.ratinglua', 3);
setFilledCircles('.ratingsql', 4);

//------------------ Cercles des Tools ------------------//

setFilledCircles('.ratingintellij', 4);
setFilledCircles('.ratingdatagrip', 4);
setFilledCircles('.ratingpycharm', 4);
setFilledCircles('.ratingclion', 4);
setFilledCircles('.ratingfleet', 0);
setFilledCircles('.ratingvscode', 5);
setFilledCircles('.ratingvscodium', 2);
setFilledCircles('.ratingdocker', 3);
setFilledCircles('.ratinggitkraken', 2);
