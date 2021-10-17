// DOM Nodes--------------------
const $scrollIcon = document.querySelector('.scroll-icon');

// Event Binding----------------
const EXECUTE_AFTER_MILLISECOND = 100;

window.onscroll = _.throttle(() => {
  window.pageYOffset > 300
    ? ($scrollIcon.style.display = 'block')
    : ($scrollIcon.style.display = 'none');
}, EXECUTE_AFTER_MILLISECOND);

$scrollIcon.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
