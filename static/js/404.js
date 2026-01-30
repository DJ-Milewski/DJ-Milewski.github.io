document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('particle-canvas');
    if (!canvas) {
        return;
    }
    const ctx = canvas.getContext('2d');

    let particles = [];
    const particleCount = 50;
    const connectDistance = 100;
    const particleColor = 'rgba(255, 191, 0, 0.8)';
    const lineColor = 'rgba(255, 191, 0, 0.2)';

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function createParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                radius: Math.random() * 1.5 + 1
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = particleColor;
            ctx.fill();
        });

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < connectDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = lineColor;
                    ctx.lineWidth = 1;
                    ctx.globalAlpha = 1 - (dist / connectDistance);
                    ctx.stroke();
                    ctx.globalAlpha = 1;
                }
            }
        }

        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', () => {
        resizeCanvas();
        createParticles();
    });

    resizeCanvas();
    createParticles();
    animate();
});