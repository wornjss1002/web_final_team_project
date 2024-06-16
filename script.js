const body = document.body
const navbarBrand = document.querySelector('.navbar-brand')
const headerDivider = document.querySelector('.header-divider')
const headerLinks = document.querySelector('.header-links')
const mainContainer = document.querySelector('.main-container')
const footerContainer = document.querySelector('.footer-container')

// 스크롤 이벤트 리스너
window.addEventListener('scroll', function () {
  if (window.scrollY > 100) {
    navbarBrand.classList.add('hidden')
    headerDivider.classList.add('hidden')
    headerLinks.classList.add('scrolled')
    scrollToTopButton.style.display = 'block'
  } else {
    navbarBrand.classList.remove('hidden')
    headerDivider.classList.remove('hidden')
    headerLinks.classList.remove('scrolled')
    scrollToTopButton.style.display = 'none'
  }
})

// 페이지 맨 위로 스크롤하는 함수
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

// Dark Mode Toggle Functionality
const darkModeToggle = document.querySelector('.dark-mode-toggle')

darkModeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode')
  navbarBrand.classList.toggle('dark-mode')
  headerDivider.classList.toggle('dark-mode')
  headerLinks.classList.toggle('dark-mode')
  mainContainer.classList.toggle('dark-mode')
  footerContainer.classList.toggle('dark-mode')

  // Toggle moon and sun icons
  const moonIcon = document.querySelector('.moon-icon')
  const sunIcon = document.querySelector('.sun-icon')
  moonIcon.classList.toggle('hidden')
  sunIcon.classList.toggle('hidden')

  // Toggle footer icons color
  const footerIcons = document.querySelectorAll('.footer-links a')
  footerIcons.forEach((icon) => {
    icon.classList.toggle('dark-mode')
  })

  // Toggle header links text color
  const headerLinksText = document.querySelectorAll('.header-links .nav-link')
  headerLinksText.forEach((link) => {
    link.classList.toggle('dark-mode-text')
  })
})
