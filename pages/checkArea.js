const radioBtns = document.querySelectorAll('input[type="radio"]');
const forms = document.querySelectorAll(".form");
// console.log(radioBtns.length);
// console.log(forms.length);
const formTags = document.querySelectorAll("form");
console.log(formTags.length);

radioBtns[0].addEventListener("change", () => {
  forms[0].style.display = "flex";
  forms[1].style.display = "none";
  forms[2].style.display = "none";
  const base = document.querySelector(".base");
  const height = document.querySelector(".height");
  const calBtn1 = document.querySelector(".calculate1");
  const result1 = document.querySelector(".result1");
  calBtn1.addEventListener("click", () => {
    result1.innerHTML = (Number(base.value) * Number(height.value)) / 2;
  });
});

radioBtns[1].addEventListener("change", () => {
  forms[1].style.display = "flex";
  forms[0].style.display = "none";
  forms[2].style.display = "none";

});

radioBtns[2].addEventListener("change", () => {
  forms[2].style.display = "flex";
  forms[0].style.display = "none";
  forms[1].style.display = "none";

});

formTags[0].addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log("C")
  const a = document.querySelector(".length1");
  const b = document.querySelector(".length2");
  const c = document.querySelector(".length3");

  const result2 = document.querySelector(".result2");

  let aVal = Number(a.value);
  let bVal = Number(b.value);
  let cVal = Number(c.value);
  let s = (aVal + bVal + cVal) / 2;
  console.log(s, aVal, bVal, cVal);
  result2.innerHTML = Math.sqrt(s * (s - aVal) * (s - bVal) * (s - cVal));
})

formTags[1].addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log("C")
  const side1 = document.querySelector(".side1");
  const side2 = document.querySelector(".side2");
  const anglec = document.querySelector(".anglec");

  const result3 = document.querySelector(".result3");

  let side1Val = Number(side1.value);
  let side2Val = Number(side2.value);
  let anglecVal = Number(anglec.value);

  result3.innerHTML = (side1Val*side2Val*Math.sin(anglecVal*Math.PI/180))/2;
})
