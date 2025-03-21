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