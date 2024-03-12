// Code chính

const box = document.getElementById("hover");

box.addEventListener("mouseenter", () => {
    box.innerHTML = "Haha";
    // Nếu em muốn thêm hiệu ứng
    box.style.transform = "scale(1.5, 1.5)";
});

box.addEventListener("mouseleave", () => {
    box.innerHTML = "Huhu";
    // Nếu em muốn thêm hiệu ứng
    box.style.transform = "none";
});
