var images = document.querySelectorAll('.photo-album img');
          var popup = document.querySelector('.image-popup');
          var popupImage = document.querySelector('.image-popup img');
          var closePopup = document.querySelector('.close-popup');

          // Create an array of image sources
          var imageSources = Array.from(images).map(function(image) {
            return image.src;
          });

          // Add click event listeners to each image
          images.forEach(function(image) {
            image.addEventListener('click', function() {
              // Set the popup image source to the clicked image source
              popupImage.src = image.src;
              // Show the popup
              popup.style.display = 'block';
            });
          });

          // Add click event listener to the close button
          closePopup.addEventListener('click', function() {
            // Hide the popup
            popup.style.display = 'none';
          });

          // Add event listener for "Escape" key press
          document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
              // Hide the popup
              popup.style.display = 'none';
            } else if (event.key === 'ArrowLeft') {
              // Get the current image source index
              var index = imageSources.indexOf(popupImage.src);
              // If the current image is not the first one, show the previous one
              if (index > 0) {
                popupImage.src = imageSources[index - 1];
              }
            } else if (event.key === 'ArrowRight') {
              // Get the current image source index
              var index = imageSources.indexOf(popupImage.src);
              // If the current image is not the last one, show the next one
              if (index < imageSources.length - 1) {
                popupImage.src = imageSources[index + 1];
              }
            }
          });

          // Add event listener for click outside the popup container
          document.addEventListener('click', function(event) {
            if (event.target === popup) {
              // Hide the popup
              popup.style.display = 'none';
            }
          });