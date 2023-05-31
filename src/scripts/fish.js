const fishies = [
    'pictures/nemo.png',
    'pictures/octo.png',
    'pictures/shark.png',
    'pictures/turtle.png',
    'pictures/whale.png',
    'pictures/crab.png',
    'pictures/seal.png',
    'pictures/dolphin.png'
]

class Fish {
    constructor(width, height) {
        let index = Math.floor(Math.random() * 8);
        this.img = document.createElement('img');
        this.img.src = fishies[index];
        this.img.style.visibility = 'hidden';
        this.img.style.left = `${width}px`;
        this.img.style.top = `${height}px`;
        this.img.style.zIndex = "998"
        let fish = document.getElementById("fish")
        fish.appendChild(this.img);
    }

    showFish() {
        console.log("show fish")
        this.img.style.visibility = 'visible'
        
    }

    deleteFish() {
        console.log("delete")
        this.img.remove()
    }
}

export default Fish;