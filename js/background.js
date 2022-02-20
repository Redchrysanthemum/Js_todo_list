const images = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length )];

const bgimage = document.createElement("img");


bgimage.src = `./img/${chosenImage}`;

document.body.appendChild(bgimage);
