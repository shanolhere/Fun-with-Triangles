const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const submitBtn = document.querySelector(".submit");

const resultSection = document.querySelector(".resultSection");

submitBtn.addEventListener("click", () => {
  let result =
    Number(input1.value) + Number(input2.value) + Number(input3.value);
  //console.log(result);
  if (result === 180) {
    resultSection.innerText = "Yay! These angles can make a triangle!";
  } else {
    resultSection.innerText = "Oops! These angles cannot make a triangle";
  }
});
