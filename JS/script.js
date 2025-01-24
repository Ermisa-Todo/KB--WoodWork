const lightbox = document.getElementById('lightbox'); 
const lightboxImg = document.getElementById('lightbox-img'); const thumbnails = document.querySelectorAll('.thumbnail');
 
const closeBtn = document.querySelector('.close'); 
  
  // Open Lightbox on Click //
   thumbnails.forEach((thumbnail) => { 
    thumbnail.addEventListener('click', () => { 
    lightbox.style.display = 'flex'; 
    lightboxImg.src = thumbnail.src; 
     }); }); 
     // Close Lightbox // 
      closeBtn.addEventListener('click', () => { 
    lightbox.style.display = 'none'; }); 
    // Close Lightbox on Outside Click // 
    lightbox.addEventListener('click', (e) => { 
        if (e.target === lightbox) { lightbox.style.display = 'none'; 
     }
     });

  function callUs() {
      window.location.href = 'tel:+15551234567';
  }

  function emailUs() {
      window.location.href = 'mailto:info@yourcarpentry.com';
  }
 

