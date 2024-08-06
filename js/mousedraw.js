const canvas = document.getElementById('cursor-trail');
const ctx = canvas.getContext('2d');
let trail = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function drawTrail() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    for (let i = 0; i < trail.length; i++) {
        const point = trail[i];
        ctx.lineTo(point.x, point.y);
    }
    ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    ctx.lineWidth = 2;
    ctx.stroke();
}

document.addEventListener('mousemove', (e) => {
    trail.push({ x: e.clientX, y: e.clientY });
    if (trail.length > 20) trail.shift();
    drawTrail();
});

window.addEventListener('resize', resizeCanvas);
resizeCanvas();