// script.js
function initMobileMenu() {
  // Находим элементы
  const menuToggle = document.querySelector('.menu-toggle')
  const headerNav = document.querySelector('.header-nav')
  const navLinks = document.querySelectorAll('.header-nav a')

  // Проверяем, что элементы существуют
  if (!menuToggle || !headerNav) return

  // Функция переключения меню
  function toggleMenu() {
    headerNav.classList.toggle('active')
    menuToggle.classList.toggle('active')
    document.body.classList.toggle('menu-open')

    const isExpanded = headerNav.classList.contains('active')
    menuToggle.setAttribute('aria-expanded', isExpanded)
    menuToggle.setAttribute(
      'aria-label',
      isExpanded ? 'Закрыть меню' : 'Открыть меню'
    )
  }

  // Функция закрытия меню
  function closeMenu() {
    headerNav.classList.remove('active')
    menuToggle.classList.remove('active')
    document.body.classList.remove('menu-open')
    menuToggle.setAttribute('aria-expanded', 'false')
    menuToggle.setAttribute('aria-label', 'Открыть меню')
  }

  // Обработчик клика вне меню
  function handleClickOutside(event) {
    if (
      !event.target.closest('.header-nav') &&
      !event.target.closest('.menu-toggle') &&
      headerNav.classList.contains('active')
    ) {
      closeMenu()
    }
  }

  // Обработчик клавиши Escape
  function handleEscape(event) {
    if (event.key === 'Escape' && headerNav.classList.contains('active')) {
      closeMenu()
    }
  }

  // Навешиваем обработчики событий
  menuToggle.addEventListener('click', toggleMenu)

  navLinks.forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  document.addEventListener('click', handleClickOutside)
  document.addEventListener('keydown', handleEscape)
}

// Инициализация при загрузке документа
document.addEventListener('DOMContentLoaded', initMobileMenu)
