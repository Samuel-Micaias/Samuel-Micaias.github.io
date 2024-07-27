document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('dataCanvas');
    const ctx = canvas.getContext('2d');
  
    // Configura o tamanho do canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    // Função para desenhar dados
    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
  
      ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
      ctx.font = '24px monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
  
      const text = 'Dados em Movimento';
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
  
      ctx.fillText(text, x, y);
  
      requestAnimationFrame(draw);
    }
  
    // Inicia a animação
    draw();
  
    // Ajusta o tamanho do canvas quando a janela é redimensionada
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  });
  