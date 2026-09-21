document.addEventListener('DOMContentLoaded', function(){
  const btns = document.querySelectorAll('.hamburger');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const header = btn.closest('header');
      header.classList.toggle('open');
      btn.classList.toggle('active');
    });
  });
});
