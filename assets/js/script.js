document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.getElementById("tap-overlay");
    const video = document.getElementById("bg-video");
    const gallery = document.getElementById("image-gallery");
    const productView = document.getElementById("product-view");

    overlay.addEventListener("click", () => {
        overlay.style.display = "none";
        video.muted = false;
        video.play();
        gallery.style.display = "grid";
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
                img1.classList.add("show");
                img2.classList.remove("show");
                state = 1;
            } else {
                img1.classList.remove("show");
                img2.classList.add("show");
                state = 0;
            }
        }

        cycle();
        clearInterval(interval);
        interval = setInterval(cycle, 3000);
    };

    window.hideProduct = () => {
        productView.style.display = "none";
        gallery.style.display = "grid";
        clearInterval(interval);
    };

});