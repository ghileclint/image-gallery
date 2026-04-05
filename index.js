const modal = document.getElementById("modalContainer");
const modalImage = document.getElementById("modalImage");
const images = document.querySelectorAll(".images");
const closebtn = document.querySelector(".close");
const nextBtn = document.querySelector(".nextBtn");
const previousBtn = document.querySelector(".previousBtn");

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = img.src;
    currentIndex = index;
  });
});

/*closing the image when clicked*/

closebtn.onclick = () => {
  modal.style.display = "none";
};

/*closes when clicking outside image*/

modal.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

let currentIndex = 0;

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  modalImage.src = images[currentIndex].src;
});

previousBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImage.src = images[currentIndex].src;
});
