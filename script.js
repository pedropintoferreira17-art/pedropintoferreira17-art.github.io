const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});
revealEls.forEach(el => observer.observe(el));

const cursor = document.getElementById('cursor');
if (window.matchMedia('(pointer:fine)').matches) {
  window.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  document.querySelectorAll('a, .service, .work-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.width='34px';
      cursor.style.height='34px';
      cursor.style.background='rgba(198,169,105,.2)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.width='18px';
      cursor.style.height='18px';
      cursor.style.background='transparent';
    });
  });
}

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  document.querySelectorAll('.work-art').forEach((el, i) => {
    el.style.transform = `translateY(${Math.min(20, y * (0.006 + i * 0.001))}px) scale(1.04)`;
  });
}, {passive:true});
