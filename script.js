document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById("toggleBtn");
    const navbarMenu = document.getElementById("navbarMenu");

    if (toggleBtn && navbarMenu) {
        toggleBtn.addEventListener('click', function() {
            navbarMenu.classList.toggle("active");
            toggleBtn.classList.toggle("open");
        });
    } else {
        console.error("Navbar menu or toggle button not found");
    }
});
