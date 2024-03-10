document.addEventListener("DOMContentLoaded", () => {
    let images = ['соник.jpg', 'соник1.jpg', 'соник2.jpg', 'соник3.png', 'соник4.jpg', 'соник5.avif', 'соник6.jpg', 'соник7.jpg', 'соник8.webp'];
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImageSrc = 'images/' + images[randomIndex];
    document.getElementById('randomImage').src = randomImageSrc;
}); 