document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const logo = document.getElementById("logo");
    const gallery = document.getElementById("gallery-link");

    overlay.addEventListener("click", function() {
        // Hide overlay
        overlay.classList.add("hidden");

        // Play video with audio
        video.classList.remove("hidden");
        video.muted = false;
        video.play();

        // Show logo and gallery link after 2 seconds
        setTimeout(() => {
            logo.classList.add("show");
            gallery.classList.add("show");
        }, 2000);
    });
});
