 // Array of local image URLs
 const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg'
];

let currentImageIndex = 0;

function changeImage() {
    const imageElement = document.getElementById('image');
    imageElement.style.opacity = 0; // Fade out the current image

    // Wait for the fade-out effect to complete before changing the image
    setTimeout(() => {
        // Increment the index and loop back to 0 when it exceeds the array length
        currentImageIndex = (currentImageIndex + 1) % images.length;

        // Update the image source to the next image
        imageElement.src = images[currentImageIndex];

        // Fade the new image in
        imageElement.style.opacity = 1;
    }, 500); // Timeout duration to match the fade-out time
}