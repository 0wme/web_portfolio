const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = '01';
const columns = canvas.width / 10; 
const drops = [];

for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height); 

    ctx.fillStyle = '#0F0'; 
    ctx.font = '10px arial';

    for (let i = 0; i < drops.length; i++) {
        const text = symbols.charAt(Math.floor(Math.random() * symbols.length));
        ctx.fillText(text, i * 10, drops[i] * 10); 

        if (drops[i] * 10 > canvas.height || Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrixRain, 33);

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

