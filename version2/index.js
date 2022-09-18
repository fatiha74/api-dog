"use strict";

const dogContainer = document.querySelector(".dogContainer");

async function getDogs() {
  try {
    const fetchDog = await fetch("https://dog.ceo/api/breed/hound/images");
    console.log(fetchDog);
    if (!fetchDog.ok) throw new Error("Error could not fetch the data");
    const dogs = await fetchDog.json();
    console.log(dogs);
    console.log(dogs.message);
    dogs.message.forEach((dog) => {
      createDogImg(dog);
    });
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
