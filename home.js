document.addEventListener("mousemove", function(event) {
    const eyes = document.querySelectorAll(".eye");

    eyes.forEach(eye => {
        const boundingBox = eye.getBoundingClientRect();
        const eyeCenterX = boundingBox.left + boundingBox.width / 2;
        const eyeCenterY = boundingBox.top + boundingBox.height / 2;
        const angle = Math.atan2(event.clientY - eyeCenterY, event.clientX - eyeCenterX);
        const distance = Math.min(eye.offsetWidth / 4, eye.offsetHeight / 4);
        const pupil = eye.querySelector(".pupil");
        
        pupil.style.transform = `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
    });
});
