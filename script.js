// Funcionalidad para los botones de "Me gusta"
document.querySelectorAll('.post-action').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent.includes('Me gusta')) {
            this.classList.toggle('liked');
            const heart = this.querySelector('span:first-child');
            heart.textContent = this.classList.contains('liked') ? '❤️' : '🤍';
        }
    });
});

// Funcionalidad para los botones de "Seguir"
document.querySelectorAll('.sidebar-follow-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        if (this.textContent === 'Seguir') {
            this.textContent = 'Siguiendo';
            this.style.background = '#e4e6eb';
            this.style.color = '#050505';
        } else {
            this.textContent = 'Seguir';
            this.style.background = '#1877f2';
            this.style.color = 'white';
        }
    });
});

// Comportamiento del buscador en móvil
const searchWrap = document.getElementById('searchWrap');
const searchToggle = document.getElementById('searchToggle');
const searchField = document.getElementById('searchField');
const searchInputWrapper = document.getElementById('searchInputWrap');

searchToggle.addEventListener('click', () => {
    searchWrap.classList.toggle('open');
    if (searchWrap.classList.contains('open')) {
        setTimeout(() => searchField.focus(), 150);
    }
});

// Al hacer clic en la lupa dentro del input, cerrar el buscador
searchInputWrapper.addEventListener('click', (e) => {
    // Solo cerrar si se hace clic en el ícono de búsqueda
    if (e.target.classList.contains('search-icon-inline') || e.target.textContent === '🔍') {
        searchWrap.classList.remove('open');
    }
});

// Cerrar la búsqueda al pulsar fuera
document.addEventListener('click', (e) => {
    if (!searchWrap.contains(e.target) && searchWrap.classList.contains('open')) {
        searchWrap.classList.remove('open');
    }
});

// Cerrar con ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        searchWrap.classList.remove('open');
    }
});