const images = [
    "bg1.JPG",
    "bg2.JPG",
    "bg3.JPG",
    "bg4.JPG"
];

const chosenImage = images[Math.floor(Math.random() * images.length )];

const bgimage = document.createElement("img");


bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);