console.log('%c HI', 'color: firebrick');

const imageContainer = document.getElementById("dog-image-container");
const dogBreeds = document.getElementById("dog-breeds");
const breedDropdown = document.getElementById("breed-dropdown");

console.log(imageContainer);
console.log(dogBreeds);
console.log(breedDropdown);
fetch("https://dog.ceo/api/breeds/list/all")
.then(response => response.json())
.then(json => {
  for (const breed in json.message) {
    const newBreed = document.createElement("li");
    newBreed.innerHTML = json.message[breed];
    dogBreeds.append(newBreed);
  }
}).then(
    fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(response => response.json())
      .then(json => {
      for (const image in json.message) {
        const newImage = document.createElement("img");
        newImage.setAttribute("src", json.message[image]);
        newImage.style.width = "20%";
        imageContainer.append(newImage);
      }
  })
);