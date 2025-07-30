document.addEventListener('DOMContentLoaded', () => {
  const btn_c1_1 = document.querySelector('.btn_primary');

  if (btn_c1_1) {
    btn_c1_1.addEventListener('mouseenter', () => {
      btn_c1_1.style.transform = 'scale(1.05)';
      btn_c1_1.style.transition = 'transform 0.2s ease';
    });
    btn_c1_1.addEventListener('mouseleave', () => {
      btn_c1_1.style.transform = 'scale(1)';
      btn_c1_1.style.transition = 'transform 0.2s ease';
    });

    btn_c1_1.addEventListener('click', (e) => {
      // e.preventDefault();
      // alert('Você será levado para a seção C1_1');
      // window.location.href = btn_c1_1.href;
    });
  }
});
