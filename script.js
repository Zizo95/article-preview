const share = document.querySelector('.share');
const ishare = document.querySelector('.i-share');


share.addEventListener('click', function() {
    ishare.classList.toggle('active');
  });