const navbarBrand = document.querySelector(".navbar-brand");
const headerDivider = document.querySelector(".header-divider");
const headerLinks = document.querySelector(".header-links");
const headerContainer = document.querySelector(".header-container"); // header-container 요소 선택
const footerLinks = document.querySelectorAll(".footer-links a");
const scrollToTopButton = document.getElementById("scrollToTopButton");

// 스크롤 이벤트 리스너
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbarBrand.classList.add("hidden");
        headerDivider.classList.add("hidden");
        headerLinks.classList.add("scrolled");
        headerContainer.classList.add("scrolled"); // 스크롤 시 클래스 추가
        scrollToTopButton.style.display = "block";
    } else {
        navbarBrand.classList.remove("hidden");
        headerDivider.classList.remove("hidden");
        headerLinks.classList.remove("scrolled");
        headerContainer.classList.remove("scrolled"); // 스크롤 시 클래스 제거
        scrollToTopButton.style.display = "none";
    }
});

// 페이지 맨 위로 스크롤하는 함수
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

// Dark Mode Toggle Functionality
const darkModeToggle = document.querySelector(".dark-mode-toggle");
const body = document.body;
const mainContainer = document.querySelector(".main-container");
const footerContainer = document.querySelector(".footer-container");
const headerLinksNavLinks = document.querySelectorAll(".header-links .nav-link");

darkModeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");
    headerContainer.classList.toggle("dark-mode");
    mainContainer.classList.toggle("dark-mode");
    footerContainer.classList.toggle("dark-mode");

    // Toggle moon and sun icons
    const moonIcon = document.querySelector(".moon-icon");
    const sunIcon = document.querySelector(".sun-icon");
    moonIcon.classList.toggle("hidden");
    sunIcon.classList.toggle("hidden");

    // Toggle background and text colors
    if (body.classList.contains("dark-mode")) {
        // Dark mode
        body.style.backgroundColor = "#333";
        body.style.color = "#ffffff";
        headerLinksNavLinks.forEach((link) => (link.style.color = "#ffffff"));
        footerLinks.forEach((link) => (link.style.color = "#ffffff"));
    } else {
        // Light mode
        body.style.backgroundColor = "#ffffff";
        body.style.color = "#333";
        headerLinksNavLinks.forEach((link) => (link.style.color = "#333"));
        footerLinks.forEach((link) => (link.style.color = "#333"));
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const slider = document.querySelector(".slides");
    const slides = document.querySelectorAll(".slide");
    const slideCount = slides.length;
    const visibleSlides = 4; // 화면에 보이는 슬라이드 수
    let currentIndex = 0;

    // 이미지 너비와 마진을 합한 크기 계산
    const slideWidth = slides[0].offsetWidth;
    const slideMargin = parseInt(window.getComputedStyle(slides[0]).marginRight);
    const moveSize = slideWidth + slideMargin;

    // Previous 버튼 클릭 시
    prevButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slideCount - visibleSlides; // 첫 번째 이미지에서 이전 버튼 클릭 시 마지막 세트로
        }
        moveSlides();
    });

    // Next 버튼 클릭 시
    nextButton.addEventListener("click", function () {
        if (currentIndex < slideCount - visibleSlides) {
            currentIndex++;
        } else {
            currentIndex = 0; // 마지막 세트에서 다음 버튼 클릭 시 첫 번째 이미지로
        }
        moveSlides();
    });

    // 슬라이드 이동 함수
    function moveSlides() {
        slider.style.transition = "transform 0.5s ease";
        slider.style.transform = `translateX(-${moveSize * currentIndex}px)`;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const movieRow = document.querySelector(".container-fluid.main-container .row");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    let clickCount = 0;

    const movieData = [
        {
            title: "퓨리오사: 매드맥스 사가",
            image: "image/5.jpg",
            description: "예매율 2.5%개봉일 2024.05.22",
            url: "madmax/madmax.html",
        },
        {
            title: "핸섬가이즈",
            image: "image/6.jpg",
            description: "예매율 2.5%개봉일 2024.06.26",
            url: "handsome/handsome.html",
        },
        {
            title: "존 오브 인터레스트",
            image: "image/7.jpg",
            description: "예매율 1.7%개봉일 2024.06.05",
            url: "zone/zone.html",
        },
        {
            title: "캣퍼슨",
            image: "image/8.jpg",
            description: "예매율 1.5%개봉일 2024.06.19",
            url: "cat/cat.html",
        },
        {
            title: "극장판 하이큐!! 쓰레기장의 결전",
            image: "image/9.jpg",
            description: "예매율 1%개봉일 2024.05.15",
            url: "hique/hique.html",
        },
        {
            title: "드라이브",
            image: "image/10.jpg",
            description: "예매율 1.1%개봉일 2024.06.12",
            url: "drive/drive.html",
        },
    ];

    function createMovieCard(movie) {
        return `
            <div class="col-lg-3 col-md-6 mb-4">
                <div class="card" style="width: 230px; height: 450px">
                <a href="${movie.url}">
                    <img
                        src="${movie.image}"
                        class="card-img-top"
                        alt="${movie.title}"
                        style="height: 320px; object-fit: cover"
                    />
                </a>
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    loadMoreBtn.addEventListener("click", function () {
        let cardsToLoad = clickCount === 0 ? 4 : clickCount === 1 ? 2 : 0;

        for (let i = 0; i < cardsToLoad; i++) {
            if (clickCount * 4 + i < movieData.length) {
                movieRow.insertAdjacentHTML("beforeend", createMovieCard(movieData[clickCount * 4 + i]));
            }
        }

        clickCount++;

        if (clickCount >= 2) {
            loadMoreBtn.style.display = "none";
        }
    });
});
