<!DOCTYPE html>
<html lang="en">
<head>
    <style>
        /* Basic styling for the image container */
        .image-container {
            position: relative;
            display: inline-block;
            margin: 10px;
        }

        /* Styling for the image count badge */
        .image-count {
            position: absolute;
            top: 10px;
            right: 10px;
            background-color: red;
            color: white;
            padding: 5px 10px;
            border-radius: 50%;
            font-size: 1rem;
            display: none; /* Hidden by default */
        }

        /* Mobile-specific styles */
        @media (max-width: 600px) {
            .image-count {
                display: block; /* Show on mobile */
            }
        }
    </style>
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
