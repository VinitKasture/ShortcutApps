let dropdownBtn = document.querySelector("#dropdown-btn");
let dropdownArrow = document.querySelector(".fas.fa-chevron-down");
let dropdownList = document.querySelector(".dropdownList");

dropdownBtn.addEventListener('click', () => {
    dropdownList.classList.toggle('active');
    dropdownArrow.style.transform += "rotate(180deg)";
})