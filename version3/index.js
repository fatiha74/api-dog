"use strict";

const dogContainer = document.querySelector(".dogContainer");

async function getDogs() {
  try {
    const fetchDog = await fetch("https://dog.ceo/api/breeds/image/random");
    console.log(fetchDog);
    const dog = await fetchDog.json();
    console.log(dog);
    console.log(dog.message);
    createDogImg(dog.message);
    return dog;
  } catch (err) {
    console.error(err);
  }
}

getDogs();

function createDogImg(url) {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  img.classList.add("img");
  dogContainer.appendChild(img);
}
