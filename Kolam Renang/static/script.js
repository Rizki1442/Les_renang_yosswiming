document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.getElementById('sidebar');
    const menuButton = document.getElementById('menuButton');
    const body = document.body;

    if (!sidebar || !menuButton) {
        console.error("Pastikan elemen dengan ID 'sidebar' dan 'menuButton' ada di dalam HTML.");
        return;
    }

    // Sembunyikan sidebar saat halaman pertama kali dimuat
    sidebar.classList.add('-translate-x-full');

    // Fungsi untuk membuka/tutup sidebar dan mengontrol scrolling
    function toggleSidebar() {
        const isSidebarOpen = !sidebar.classList.contains('-translate-x-full');

        if (isSidebarOpen) {
            sidebar.classList.add('-translate-x-full');
            body.style.overflow = 'auto'; // Aktifkan scroll saat sidebar tertutup
        } else {
            sidebar.classList.remove('-translate-x-full');
            body.style.overflow = 'hidden'; // Matikan scroll saat sidebar terbuka
        }
    }

    // Event listener untuk tombol menu (☰)
    menuButton.addEventListener('click', function (event) {
        event.stopPropagation(); // Mencegah klik langsung menutup sidebar
        toggleSidebar();
    });

    // Menutup sidebar saat mengklik di luar sidebar
    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !menuButton.contains(event.target)) {
            sidebar.classList.add('-translate-x-full');
            body.style.overflow = 'auto'; // Aktifkan kembali scroll saat sidebar tertutup
        }
    });

    // Membatasi scroll hanya ke bawah saat sidebar tertutup
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scroll ke bawah diperbolehkan
        }
        lastScrollTop = scrollTop;
    });
});


function animateCounter(id, start, end, duration) {
    let obj = document.getElementById(id);
    let current = start;
    let increment = (end - start) / (duration / 50);
    let interval = setInterval(() => {
        current += increment;
        obj.innerText = Math.floor(current);
        if (current >= end) {
            obj.innerText = end;
            clearInterval(interval);
        }
    }, 50);
}

document.addEventListener("DOMContentLoaded", function () {
    animateCounter("memberCount", 0, 500, 2000);
    animateCounter("coachCount", 0, 10, 2000);
});

function scrollCarousel(direction) {
        const carousel = document.querySelector('.carousel');
        const scrollAmount = carousel.clientWidth;
        carousel.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }


    let currentIndex = 0;
    function slideLeft() {
        const slider = document.getElementById('team-slider');
        currentIndex = Math.max(currentIndex - 1, 0);
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    function slideRight() {
        const slider = document.getElementById('team-slider');
        currentIndex = Math.min(currentIndex + 1, 11);
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

