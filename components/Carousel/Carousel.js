class Carousel {
	constructor(carousel){
		this.carousel = carousel;
		this.leftButton = document.querySelector(".left-button");
		this.rightButton = document.querySelector(".right-button");
		this.images = document.querySelectorAll(".carousel img");
		this.images = Array.from(this.images);
		this.index = 0

		this.leftButton.addEventListener("click", (e) => {
			this.advanceCarousel(-1);
		});
		this.rightButton.addEventListener("click", (e) => {
			this.advanceCarousel(1);
		});
	}
	advanceCarousel = (value) => {
		//Takes in the current index of the item containing "display: flex" style in the carousel.

		this.index < this.images.length - 1 
		? this.index += value 
		: this.index += value

		console.log(this.index);

		//Removes the "display: flex" from the current index

		//Increments over the array taking in the "value"

		//Adds "display: flex" back to the new index

	}
}

let carousel = document.querySelector(".carousel");
new Carousel(carousel)

/* If You've gotten this far, you're on your own! Although we will give you some hints:
	1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
	2. You will need to grab a reference to all of the images
	3. Create a current index
	4. Those buttons are gonna need some click handlers.
	5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
	6. Have fun!
*/
