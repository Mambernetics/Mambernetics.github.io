// Updated JavaScript: loadNav.js

document.addEventListener('DOMContentLoaded', function() {
  // Check if <noscript> or fallback content is already present
  if (document.querySelector('nav')) {
    return; // Exit if a <nav> element already exists
  }
  
  // Dynamically load the nav.html if JavaScript is enabled and no <nav> exists
  fetch('nav.html')
    .then(response => response.text())
    .then(data => {
      document.body.insertAdjacentHTML('afterbegin', data);
    })
    .catch(error => console.error('Error loading navigation:', error));
});
