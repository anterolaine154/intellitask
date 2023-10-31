/* sophisticated_code.js */

// This code generates a complex and creative animation using the HTML5 canvas API

// Create canvas element
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');

// Create animated particles
class Particle {
  constructor(x, y, radius, color, velocity) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = velocity;
    this.radians = Math.random() * Math.PI * 2;
    this.distance = (Math.random() * 40) + 50;
    this.lastMouse = { x: x, y: y };
  }

  update(mouse) {
    const lastPoint = { x: this.x, y: this.y };

    // Move particle over time
    this.radians += this.velocity;

    // Drag effect
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.05;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.05;

    // Circular motion
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distance;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distance;
    
    this.draw(lastPoint);
  }

  draw(lastPoint) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.radius;
    ctx.moveTo(lastPoint.x, lastPoint.y);
    ctx.lineTo(this.x, this.y);
    ctx.stroke();
    ctx.closePath();
  }
}

// Generate particles
let particles = [];
function init() {
  particles = [];

  const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

  for (let i = 0; i < 100; i++) {
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    const radius = Math.random() * 2 + 1;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const velocity = Math.random() * 0.01 + 0.005;

    particles.push(new Particle(x, y, radius, color, velocity));
  }
}

// Animation loop
function animate() {
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach(particle => {
    particle.update({ x: event.clientX, y: event.clientY });
  });
}

// Initialize and start animation
init();
animate();