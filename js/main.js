// Captura de eventos con DOM
const nav = document.getElementById('nav');
const abrir = document.getElementById('abrir');
const list = document.getElementById('list');

//Evento Click para abrir y cerrar nav
abrir.addEventListener('click', function () {
  if (!nav.classList.contains('visible')) {
    nav.classList.add('visible');
  } else {
    nav.classList.remove('visible');
  }
});
