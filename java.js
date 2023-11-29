document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', function () {
      navLinks.classList.toggle('show');
  });
});
function openPage(page) {
    window.location.href = page;
  }

  // Show/hide product info on click
  document.querySelectorAll('.product').forEach(function(product) {
    product.addEventListener('click', function() {
      this.querySelector('.product-info').style.display = 'block';
    });
  });

