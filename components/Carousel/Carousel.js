class Carousel {
    constructor(carouselBtn) {
        this.carouselBtn = carouselBtn;
        // console.log(this.carouselBtn);

        this.data = this.carouselBtn.dataset.btn;
        // console.log(this.carouselBtnData);

        this.button = document.querySelector(`.button[data-btn='${this.data}']`);
        console.log(this.button);

        this.carouselBtn.addEventListener('click', () => {this.display()});

    };

    display() {
        const images = document.querySelectorAll('.image');

        images.forEach((img) => {
            img.setAttribute('style', 'display: none');
          });

        const img1 = document.querySelector('.image');
        img1.setAttribute('style', 'display: block');
    };

};

class Image {
    constructor(image) {
        this.image = image;
    }
};

let carousel = document.querySelectorAll('.button');
// console.log(carousel);
carousel.forEach(carouselBtn => new Carousel(carouselBtn));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/