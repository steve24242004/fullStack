 const colors = ['red', 'green', 'blue', 'yellow'];
 let currentColorIndex = 0;

 function changeColor() {
     document.body.style.backgroundColor = colors[currentColorIndex];
     currentColorIndex = (currentColorIndex + 1) % colors.length;
 }