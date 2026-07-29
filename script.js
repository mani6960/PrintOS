
const fileInput = document.getElementById("fileInput");
const fileCard = document.getElementById("fileCard");
const fileName = document.getElementById("fileName");
const fileSize = document.getElementById("fileSize");
const continueBtn = document.getElementById("continueBtn");

fileInput.addEventListener("change", () => {

    if(fileInput.files.length === 0) return;

    const file = fileInput.files[0];

    fileCard.style.display = "block";

    fileName.innerHTML = "📄 " + file.name;

    fileSize.innerHTML =
        "Size : " + (file.size / 1024 / 1024).toFixed(2) + " MB";

    continueBtn.disabled = false;
    continueBtn.style.opacity = "1";
});

continueBtn.addEventListener("click", () => {
    alert("Next Step: PDF Preview");
});
