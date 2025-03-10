const lightbox = document.getElementById('lightbox'); 
const lightboxImg = document.getElementById('lightbox-img'); const thumbnails = document.querySelectorAll('.thumbnail');
 
const closeBtn = document.querySelector('.close'); 
  
  // Open Lightbox on Click //
   thumbnails.forEach((thumbnail) => { 
 thumbnail.addEventListener('click', function () {
            lightbox.style.display = 'flex';
            lightboxImg.src = thumbnail.src;
        });
      }); 
     // Close Lightbox // 
      closeBtn.addEventListener('click', () => { 
    lightbox.style.display = 'none'; }); 
    // Close Lightbox on Outside Click // 
    lightbox.addEventListener('click', (e) => { 
        if (e.target === lightbox) { lightbox.style.display = 'none'; 
     }
     });

  function callUs() {
      window.location.href = 'tel:07301383401';
  }

  function emailUs() {
      window.location.href = 'mailto:kbwoodworkdesign20@gmail.com';
  }
 

  document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault(); 
  
    let form = event.target;
    let formData = new FormData(form);
  
    let response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { "Accept": "application/json" }
    });
  
    if (response.ok) {
        let successMessage = document.getElementById("successMessage");
        successMessage.classList.add("show"); 
        form.reset(); 
  
     
        setTimeout(() => {
            successMessage.classList.remove("show"); 
        }, 5000);
    } else {
        alert("Something went wrong. Please try again.");
    }
  });