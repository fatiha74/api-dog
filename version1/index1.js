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
    dogs.message.forEach((dog, i) => {
      createDogImg(dog, i);
      // console.log(i);
      // console.log(arr);
    });
  } catch (err) {
    console.error(err);
  }
}

getDogs();

function createDogImg(url, i) {
  const img = document.createElement("img");
  img.setAttribute("src", url);
  // img.classList.add('img', dog-i})
  img.classList.add("img", i);
  dogContainer.appendChild(img);
}
