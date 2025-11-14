/* -------------------------------
   FUNCIONALIDAD: BOTONES "ME GUSTA"
-------------------------------- */
document.querySelectorAll('.post-action').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.textContent.includes('Me gusta')) {
            this.classList.toggle('liked');
            const heart = this.querySelector('span:first-child');
            heart.textContent = this.classList.contains('liked') ? '❤️' : '🤍';
        }
    });
});


/* -------------------------------
   FUNCIONALIDAD: BOTÓN "SEGUIR"
-------------------------------- */
document.querySelectorAll('.sidebar-follow-btn').forEach(button => {
    button.addEventListener('click', function (e) {
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


/* -------------------------------
   BUSCADOR (solo si existe)
-------------------------------- */
const searchWrap = document.getElementById('searchWrap');
const searchToggle = document.getElementById('searchToggle');
const searchField = document.getElementById('searchField');
const searchInputWrapper = document.getElementById('searchInputWrap');

if (searchWrap && searchToggle && searchField && searchInputWrapper) {

    searchToggle.addEventListener('click', () => {
        searchWrap.classList.toggle('open');
        if (searchWrap.classList.contains('open')) {
            setTimeout(() => searchField.focus(), 150);
        }
    });

    searchInputWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('search-icon-inline') || e.target.textContent === '🔍') {
            searchWrap.classList.remove('open');
        }
    });

    document.addEventListener('click', (e) => {
        if (!searchWrap.contains(e.target) && searchWrap.classList.contains('open')) {
            searchWrap.classList.remove('open');
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchWrap.classList.remove('open');
        }
    });
}


/* -------------------------------
   MENU DE USUARIO (solo si existe)
-------------------------------- */
const userMenuToggle = document.getElementById('userMenuToggle');
const userDropdownMenu = document.getElementById('userDropdownMenu');

if (userMenuToggle && userDropdownMenu) {

    userMenuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        userDropdownMenu.classList.toggle('show');
    });

    document.addEventListener('click', function (e) {
        if (!userMenuToggle.contains(e.target) && !userDropdownMenu.contains(e.target)) {
            userDropdownMenu.classList.remove('show');
        }
    });
}


/* -------------------------------
   LOGIN -> redirigir a index.html
-------------------------------- */
const loginForm = document.querySelector(".login-form");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "index.html";
    });
}


/* -------------------------------
   BOTÓN "CREAR CUENTA NUEVA"
-------------------------------- */
const createBtn = document.querySelector(".create-btn");

if (createBtn) {
    createBtn.addEventListener("click", () => {
        window.location.href = "create-account.html";
    });
}


/* -------------------------------
   REGISTRO -> redirigir a index.html
-------------------------------- */
const registerForm = document.querySelector(".register-form");

if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });
}
