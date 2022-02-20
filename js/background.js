const image = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg"
];

const chosenImage = image[Math.floor(Math.random() * image.length )];

const bgimage = document.createElement("img");


bgimage.src =`./img/${chosenImage}`;

document.body.appendChild(bgimage);