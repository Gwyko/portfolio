let mouseX = 0, mouseY = 0; // Current target
let lightX = 0, lightY = 0; // Current light position

// Listen for mouse movement
window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    const cursor = document.getElementById('cursor');
    cursor.style.left = (e.clientX - 15) + 'px';
    cursor.style.top = (e.clientY - 15) + 'px';
});

// "How it began": We use requestAnimationFrame to create a loop
// that updates the light position 60 times per second.
function animate() {
    // The "lerp" formula: Current + (Target - Current) * Speed
    // Speed 0.1 means it moves 10% toward the target every frame.
    lightX += (mouseX - lightX) * 0.1;
    lightY += (mouseY - lightY) * 0.1;

    document.documentElement.style.setProperty('--x', lightX + 'px');
    document.documentElement.style.setProperty('--y', lightY + 'px');

    requestAnimationFrame(animate);
}

// When mouse leaves, we can reset or hide the light
document.addEventListener('mouseleave', () => {
    // Option: Move the light off-screen so it disappears
    mouseX = -500; 
    mouseY = -500;
});

// Start the animation
animate();

const cursor = document.getElementById('cursor');