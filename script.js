let flag = 0;
slideshow(flag);
function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    for (let y of slides) {
        y.style.display = "none";
    }

    if (num === slides.length) {
        num = 0;
        flag = 0;
    }
    if (num < 0) {
        num = 3;
        flag = 3;
    }

    slides[num].style.display = "block";

}

function controller(x) {
    flag = flag + x;
    slideshow(flag);
}
