document.addEventListener('DOMContentLoaded', () => {
  const scrollable = document.querySelector('.scrollable');
  const leftIcon = document.getElementById('left-icon');
  const rightIcon = document.getElementById('right-icon');
  const options = document.querySelectorAll('.option');

  leftIcon.addEventListener('click', () => {
    scrollable.scrollBy({ left: -100, behavior: 'smooth' });
  });

  rightIcon.addEventListener('click', () => {
    scrollable.scrollBy({ left: 100, behavior: 'smooth' });
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      options.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });
});
