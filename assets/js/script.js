document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const gallery = document.getElementById("image-gallery");
    const productView = document.getElementById("product-view");
    const logo = document.getElementById("main-logo");

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";

        video.muted = false;
        video.play();

        logo.style.opacity = "1";

        setTimeout(() => {
            logo.style.opacity = "0";

            setTimeout(() => {
                gallery.style.display = "grid";
            }, 800);

        }, 1500);
    });

    const data = {
        uzi: {
            imgs: [
                "assets/images/uzifront.png",
                "assets/images/uziback.png"
            ],
            title: "UZI",
            desc: "220 GSM<br>100% cotton<br>Slight oversize fit"
        },
        culture: {
            imgs: [
                "assets/images/culturefront.png",
                "assets/images/cultureback.png"
            ],
            title: "CULTURE",
            desc: "placeholder text<br>placeholder text<br>placeholder text"
        },
        cc: {
            imgs: [
                "assets/images/ccfront.png",
                "assets/images/ccback.png"
            ],
            title: "CC",
            desc: "placeholder text<br>placeholder text<br>placeholder text"
        }
    };

    let interval;

    window.showProduct = (key) => {
        const p = data[key];

        gallery.style.display = "none";
        productView.style.display = "block";

        document.getElementById("ptitle").innerHTML = p.title;
        document.getElementById("pdesc").innerHTML = p.desc;

        const img1 = document.getElementById("pimg1");
        const img2 = document.getElementById("pimg2");

        img1.src = p.imgs[0];
        img2.src = p.imgs[1];

        let state = 0;

        function cycle() {
            if (state === 0) {
                img2.classList.remove("show");
                img1.classList.add("show");
                state = 1;
            } else {
                img1.classList.remove("show");
                img2.classList.add("show");
                state = 0;
            }
        }

        img1.classList.add("show");
        img2.classList.remove("show");

        clearInterval(interval);
        interval = setInterval(cycle, 3500);
    };

    window.hideProduct = () => {
        productView.style.display = "none";
        gallery.style.display = "grid";
        clearInterval(interval);
    };

});