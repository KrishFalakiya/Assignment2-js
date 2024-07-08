document.addEventListener('DOMContentLoaded', function() {
    const featuredImage = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnails = document.querySelectorAll('#thumbnails img');

    console.log('JavaScript Loaded');
    console.log('Featured Image:', featuredImage);
    console.log('Caption:', caption);
    console.log('Thumbnails:', thumbnails);

    thumbnails.forEach(thumbnail => {
        console.log('Thumbnail:', thumbnail);
        thumbnail.addEventListener('click', function() {
            console.log('Thumbnail clicked:', this);
            // Update the featured image
            featuredImage.src = this.getAttribute('data-full');
            // Update the caption
            caption.textContent = this.getAttribute('data-caption');
            // Remove active class from all thumbnails
            thumbnails.forEach(img => img.classList.remove('active'));
            // Add active class to the clicked thumbnail
            this.classList.add('active');
        });
    });
});
