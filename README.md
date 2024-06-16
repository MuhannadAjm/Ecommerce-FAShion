<!DOCTYPE html>
<html lang="en">
<head>
 
</head>
<body>
    <div class="image-wrapper">
        <div class="image-container">
            <h1>Featured Products</h1>
            <img src="assets/screenshot/Home(1).png" alt="Featured Products" class="product-image">
            <div class="image-count"></div>
        </div>
        <div class="image-container">
            <h1>Trending Products</h1>
            <img src="assets/screenshot/Trending Products.png" alt="Trending Products" class="product-image">
            <div class="image-count"></div>
        </div>
        <div class="image-container">
            <h1>Featured Products</h1>
            <img src="assets/screenshot/Featured Products.png" alt="Featured Products" class="product-image">
            <div class="image-count"></div>
        </div>
        <div class="image-container">
            <h1>Page Offer</h1>
            <img src="assets/screenshot/page-offer.png" alt="Page Offer" class="product-image">
            <div class="image-count"></div>
        </div>
    </div>

    <script>
        // JavaScript to count images and display count
        document.addEventListener("DOMContentLoaded", function() {
            const imageContainers = document.querySelectorAll('.image-container');
            imageContainers.forEach((container, index) => {
                const imageCountElement = container.querySelector('.image-count');
                imageCountElement.textContent = `Image ${index + 1}`;
            });
        });
    </script>
</body>
</html>
