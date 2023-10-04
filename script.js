


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




document.addEventListener("DOMContentLoaded", function() {

    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    let properties = {
        particleCount: 100,
        particleRadius: 3,
        particleMaxVelocity: 0.5,
        lineLength: 150,
        particleLife: 6000
    };

    let mouseX = -1;
    let mouseY = -1;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.onresize = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.velocityX = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.velocityY = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }

        position() {
            this.x + this.velocityX > canvas.width && this.velocityX > 0 || this.x + this.velocityX < 0 && this.velocityX < 0 ? this.velocityX *= -1 : this.velocityX;
            this.y + this.velocityY > canvas.height && this.velocityY > 0 || this.y + this.velocityY < 0 && this.velocityY < 0 ? this.velocityY *= -1 : this.velocityY;
            this.x += this.velocityX;
            this.y += this.velocityY;
        }

        reDraw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, properties.particleRadius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
        }

        reCalculateLife() {
            if(this.life < 1) {
                this.reInit();
            }
            this.life--;
        }

        reInit() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.velocityX = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.velocityY = (Math.random() * (properties.particleMaxVelocity * 2)) - properties.particleMaxVelocity;
            this.life = Math.random() * properties.particleLife * 60;
        }
    }

    function drawLines() {
        let x1, y1, x2, y2, length, opacity;
        for (let i in particles) {
            x1 = particles[i].x;
            y1 = particles[i].y;

            // Draw line from particle to cursor
            length = Math.sqrt(Math.pow(mouseX - x1, 2) + Math.pow(mouseY - y1, 2));
            if (length < properties.lineLength) {
                opacity = 1 - length / properties.lineLength;
                ctx.lineWidth = '0.5';
                ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(mouseX, mouseY);
                ctx.closePath();
                ctx.stroke();
            }

            for (let j in particles) {
                x2 = particles[j].x;
                y2 = particles[j].y;
                length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                if (length < properties.lineLength) {
                    opacity = 1 - length / properties.lineLength;
                    ctx.lineWidth = '0.5';
                    ctx.strokeStyle = 'rgba(255, 255, 255, ' + opacity + ')';
                    ctx.beginPath();
                    ctx.moveTo(x1, y1);
                    ctx.lineTo(x2, y2);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    function reDrawParticles() {
        for (let i in particles) {
            particles[i].reCalculateLife();
            particles[i].position();
            particles[i].reDraw();
        }
    }

    function loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        reDrawParticles();
        drawLines();
        requestAnimationFrame(loop);
    }

    function init() {
        for (let i = 0; i < properties.particleCount; i++) {
            particles.push(new Particle);
        }
        loop();
    }

    let particles = [];
    init();

    window.addEventListener('mousemove', function(event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });
});

