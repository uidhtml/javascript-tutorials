// UIDHTML youtube channel 🙏

// Chapter - 40 - Part 2
// Real world example of includes() and lastIndexOf()

const allowedExtension = ["jpeg", "jpg", "png", "pdf"];
const error = document.querySelector(".error");

function getFileExtension(fileInput) {
  const fileName = fileInput.files[0].type;
  const splittedArray = fileName.split("/");
  const fileExtension = splittedArray[splittedArray.length - 1];
  if (!allowedExtension.includes(fileExtension)) {
    error.textContent = `${fileExtension} not allowed`;
  }
}
