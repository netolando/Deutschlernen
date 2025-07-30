document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('nav button');
  const content = document.getElementById('content');

  // Função para carregar arquivos HTML da seção
  async function loadPage(page) {
    try {
      const res = await fetch(`${page}.html`);
      if (!res.ok) throw new Error('Erro ao carregar página');
      const html = await res.text();
      content.innerHTML = html;
    } catch (e) {
      content.innerHTML = `<p style="color:red;">Erro ao carregar conteúdo.</p>`;
    }
  }

  // Controle de clique nos botões para navegação
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadPage(btn.dataset.page);
    });
  });

  // Carrega conteúdo inicial (Gramática)
  loadPage('gramatica');
});
