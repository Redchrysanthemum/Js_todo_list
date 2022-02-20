const img = [
    "bg1.jpg",
    "bg2.jpg",
    "bg3.jpg",
    "bg4.jpg"
];

const chosenImage = img[Math.floor(Math.random() * img.length )];

const bgimage = document.createElement("img");


bgimage.src =`./img/${chosenImage}`;

document.body.appendChild(bgimage);