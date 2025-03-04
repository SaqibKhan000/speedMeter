let needle = document.querySelector(".needle");
let progressNums = document.querySelector(".num-values h2");


let rotationAngle = 0; 
const maxRotation = 200; 
const increment = 7; 

// Function to rotate the needle
function rotateNeedle() {
    if (rotationAngle <= maxRotation) {
        progressNums.innerText = rotationAngle - 68;
        needle.style.transform = `rotate(${rotationAngle}deg)`; 
        rotationAngle += increment; 
        requestAnimationFrame(rotateNeedle); 
    }
}

// Start the rotation
rotateNeedle();