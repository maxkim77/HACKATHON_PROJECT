// script.js
document.addEventListener('DOMContentLoaded', function () {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('myModal');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const overlay = document.querySelector('.overlay');
  
    openModalBtn.addEventListener('click', function () {
      modal.style.display = 'block';
      overlay.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function () {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  
    overlay.addEventListener('click', function () {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    });
  });
  