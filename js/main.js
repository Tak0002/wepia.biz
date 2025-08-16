document.addEventListener('DOMContentLoaded', () => {
  const main = document.getElementById('main');
  const content = document.getElementById('content');
  const inside = document.getElementById('content-inside');

  main.classList.add('visible');

  setTimeout(() => {
    openMenu(content, inside);
  }, 900);

  main.addEventListener('mouseenter', () => {
    main.style.backgroundColor = 'rgba(0,0,0,0.8)';
  });

  main.addEventListener('mouseleave', () => {
    main.style.backgroundColor = 'rgba(0,0,0,0.7)';
  });
});

function openMenu(content, inside) {
  content.style.display = 'block';
  const animation = content.animate(
    [{ height: '0px' }, { height: content.scrollHeight + 'px' }],
    { duration: 700, easing: 'ease' }
  );
  animation.addEventListener('finish', () => {
    inside.style.opacity = 1;
  });
}
