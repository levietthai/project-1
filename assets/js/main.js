// reset banner
document.addEventListener('DOMContentLoaded', function () {
    const sliderImages = document.querySelectorAll('.slider-img');
    let currentIndex = 0;

    // Ban đầu hiển thị hình ảnh đầu tiên ngay lập tức
    // sliderImages[currentIndex].classList.add('active');

    function showNextImage() {
        sliderImages[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % sliderImages.length;
        sliderImages[currentIndex].classList.add('active');
    }

    // 3s chuyển ảnh 1 lần
    setInterval(showNextImage, 3000); 
});


// 'Back to Top' btn
const backToTopButton = document.getElementById('back-to-top');

// Hiển thị hoặc ẩn nút 'Back to Top' khi cuộn trang
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopButton.style.animation = 'fadeIn ease 1s';
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.animation = 'fadeOut ease 1s';

        // Ẩn nút 'Back to Top' sau khi hoàn thành animation
        backToTopButton.addEventListener("animationend", () => {
            if (window.scrollY <= 500) {
                backToTopButton.style.display = "none";
            }
        }, { once: true })
    }
});
// Cuộn lên đầu trang khi click vào nút 'Back to Top'
backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// add scroll 
window.addEventListener('scroll', () => {
    const navBar = document.querySelector('.nav-bar');

    navBar.style.position = 'static';

    if (window.scrollY > 200 ) {
        navBar.classList.add('scrolled');
        navBar.style.position = 'fixed';
        navBar.style.animation = 'fadeIn ease 1s';
    } else {
        navBar.classList.remove('scrolled');
    }
});
