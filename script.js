// Esperar a que cargue la página
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
  document.getElementById("contenido").style.display = "block";
});

// Modo oscuro
document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

// Abrir modales
document.querySelectorAll('.btnLeer').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'block';
  });
});

// Cerrar modales
document.querySelectorAll('.cerrar').forEach(span => {
  span.addEventListener('click', () => {
    const modalId = span.getAttribute('data-modal');
    document.getElementById(modalId).style.display = 'none';
  });
});

// Cerrar modal si clic fuera del contenido
window.addEventListener('click', (e) => {
  if(e.target.classList.contains('modal')){
    e.target.style.display = 'none';
  }
});