document.addEventListener('DOMContentLoaded', () => {
    
    // 1. MOBILE MENU TOGGLE
    const toggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = toggle ? toggle.querySelector('i') : null;

    if(toggle) {
        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. ACTIVE LINK HIGHLIGHTER
    // Automatically highlights the menu item of the current page
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.nav-links a');
    const menuLength = menuItem.length;
    for (let i = 0; i < menuLength; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].classList.add("active");
        }
    }

    // 3. DYNAMIC GALLERY LOADER
    // Looks for images named gallery-1.jpg, gallery-2.jpg ... up to 50
    const galleryGrid = document.getElementById('gallery-grid');
    
    if (galleryGrid) {
        // Configuration
        const folderPath = 'images/gallery/';
        const maxImages = 50; // Will try to load up to 50 images
        
        for (let i = 1; i <= maxImages; i++) {
            const imgContainer = document.createElement('div');
            imgContainer.className = 'gallery-item';
            
            const img = document.createElement('img');
            img.src = `${folderPath}gallery-${i}.jpg`;
            img.alt = `Gallery Image ${i}`;
            
            // Critical: If image doesn't exist, hide the container completely
            img.onerror = function() {
                imgContainer.style.display = 'none';
            };

            // If image loads successfully, fade it in
            img.onload = function() {
                imgContainer.style.display = 'block';
            };

            imgContainer.appendChild(img);
            galleryGrid.appendChild(imgContainer);
        }
    }
});