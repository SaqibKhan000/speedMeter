let needle = document.querySelector(".needle");
let progressNums = document.querySelector(".num-values h2");


let rotationAngle = 0; 
const maxRotation = 200; 
const increment = 8; 

// Function to rotate the needle
function rotateNeedle() {
    if (rotationAngle <= maxRotation) {
        progressNums.innerText = rotationAngle - 75;
        needle.style.transform = `rotate(${rotationAngle}deg)`; 
        rotationAngle += increment; 
        requestAnimationFrame(rotateNeedle); 
    }
}

// Start the rotation
rotateNeedle();