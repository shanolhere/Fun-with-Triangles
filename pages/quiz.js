const formData = document.querySelector('form');
const question = document.querySelectorAll('.quiz-card');
const result = document.querySelector('.result');
const submitBtn = document.querySelector('.submit');

const correctAns = ["option1", "option2", "option1", "option1", "option1", "option2", "option2", "option3", "option3", "option3"];
let score= 0;

formData.addEventListener('submit',(e) => {
  e.preventDefault();
  const data = new FormData(formData);
  //console.log(data[0]);
  let index = 0;
  for(let entry of data){
      if(entry[1] == correctAns[index]){
       question[index].style.backgroundColor = "lightgreen";
       score++;
      }
      else{
       question[index].style.backgroundColor = "pink";
      }
       index++;
   }
   result.innerText = score;
   submitBtn.style.display= "none";

})
