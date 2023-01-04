let nextBtn = document.getElementById("next");
let nextBtn2 = document.getElementById("next2");
let nextBtn3 = document.getElementById("next3");
let mainPage = document.getElementById("page1");
let pageTwo = document.getElementById("page2");
let pageThree = document.getElementById("page3");
let pageFour = document.getElementById("page4");
let change = document.getElementById("plan-type");
let goBackBtn = document.getElementById("backbtn");
let goBackBtn2 = document.getElementById("backbtn2");
let goBackBtn3 = document.getElementById("backbtn3");
let numberOne = document.getElementById("num1");
let numberTwo = document.getElementById("num2");
let numberThree = document.getElementById("num3");
let numberFour = document.getElementById("num4");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let switchBtn = document.getElementById("chbox")
let service1 = document.getElementById("box1");
let service2 = document.getElementById("box2");
let service3 = document.getElementById("box3");
const cart = document.getElementById("cart");
const service4 = document.getElementById("check1");
const service5 = document.getElementById("check2");
const service6 = document.getElementById("check3");
const planSpace = document.getElementById("plan-type");
const subPrice = document.getElementById("subprice");
const addPrice = document.querySelector("addprice");
const extraOne = document.getElementById("xone");
const extraTwo = document.getElementById("xtwo");
const extraThree = document.getElementById("xthree");
const yearMonth = document.querySelector(".yearly-monthly")
const confirmBtn = document.getElementById("confirm");
const pageFive = document.getElementById("page5");
const mobileBtn = document.querySelector(".phone-btn");




nextBtn.addEventListener('click', function (e) {
    mainPage.style.display = 'none';
    pageTwo.style.display = 'block';
    numberOne.style.backgroundColor = 'transparent';
    numberOne.style.color = 'white';
    numberTwo.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberTwo.style.color = 'black';
})
nextBtn2.addEventListener('click', function (e) {
    pageTwo.style.display = 'none';
    pageThree.style.display = 'block';
    numberTwo.style.backgroundColor = 'transparent';
    numberTwo.style.color = 'white';
    numberThree.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberThree.style.color = 'black';
})
nextBtn3.addEventListener('click', function (e) {
    pageThree.style.display = 'none';
    pageFour.style.display = 'block';
    numberThree.style.backgroundColor = 'transparent';
    numberThree.style.color = 'white';
    numberFour.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberFour.style.color = 'black';
})
confirmBtn.addEventListener('click', function (e) {
    pageFive.style.display = 'block';
    pageFour.style.display = 'none';
    numberFour.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberFour.style.color = 'black';
})

function goBack() {
    pageFour.style.display = 'none';
    pageTwo.style.display = 'block';
    numberFour.style.backgroundColor = 'transparent';
    numberFour.style.color = 'white';
    numberTwo.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberTwo.style.color = 'black';
}

function prevPage() {
    goBackBtn.onClick = pageTwo.style.display = 'none';
    goBackBtn.onClick = mainPage.style.display = 'block';
    numberTwo.style.backgroundColor = 'transparent';
    numberTwo.style.color = 'white';
    numberOne.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberOne.style.color = 'black';
}
function prevPage2() {
    goBackBtn2.onClick = pageThree.style.display = 'none';
    goBackBtn2.onClick = pageTwo.style.display = 'block';
    numberThree.style.backgroundColor = 'transparent';
    numberThree.style.color = 'white';
    numberTwo.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberTwo.style.color = 'black';
}
function prevPage3() {
    goBackBtn3.onClick = pageFour.style.display = 'none';
    goBackBtn3.onClick = pageThree.style.display = 'block';
    numberFour.style.backgroundColor = 'transparent';
    numberFour.style.color = 'white';
    numberThree.style.backgroundColor = 'hsl(206, 94%, 87%)';
    numberThree.style.color = 'black';
}
function switched() {
    if (chbox.checked) {
        year.style.color = 'hsl(213, 96%, 18%)';
        month.style.color = 'hsl(229, 7%, 70%)';
        yearMonth.innerHTML = '(Yearly)'
    } else {
        year.style.color = 'hsl(229, 7%, 70%)';
        month.style.color = 'hsl(213, 96%, 18%)';
        yearMonth.innerHTML = '(Monthly)'
    }
}

