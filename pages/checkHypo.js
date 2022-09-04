document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log("C")
  const a = document.querySelector(".length1");
  const b = document.querySelector(".length2");


  const result = document.querySelector(".result");

  let aVal = Number(a.value);
  let bVal = Number(b.value);

  result.innerHTML = Math.sqrt(Math.pow(aVal, 2) + Math.pow(bVal, 2));
})
