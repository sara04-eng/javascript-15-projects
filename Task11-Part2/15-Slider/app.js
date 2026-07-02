const sliderWrapper = document.querySelector(".slider-wrapper");
const slides = document.querySelectorAll(".slide");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;

const totalSlides = slides.length;

// تحديث مكان السلايدر
function updateSlider() {
    sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// الانتقال للشريحة التالية
function nextSlide() {
    currentIndex++;

    if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlider();
}

// الانتقال للشريحة السابقة
function previousSlide() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }

    updateSlider();
}

// الأحداث
nextBtn.addEventListener("click", nextSlide);

prevBtn.addEventListener("click", previousSlide);

// تشغيل تلقائي
let autoPlay = setInterval(nextSlide, 4000);

// إعادة تشغيل المؤقت بعد أي ضغط
function restartAutoPlay() {
    clearInterval(autoPlay);
    autoPlay = setInterval(nextSlide, 4000);
}

nextBtn.addEventListener("click", restartAutoPlay);
prevBtn.addEventListener("click", restartAutoPlay);

// إيقاف التشغيل عند مرور الماوس
sliderWrapper.addEventListener("mouseenter", () => {
    clearInterval(autoPlay);
});

// إعادة التشغيل عند خروج الماوس
sliderWrapper.addEventListener("mouseleave", () => {
    autoPlay = setInterval(nextSlide, 4000);
});