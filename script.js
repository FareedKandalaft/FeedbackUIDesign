const ratings = document.querySelectorAll('.rating');
const sendBtn = document.querySelector('#send');
const ratingsContainer = document.querySelector('.ratings-container');
const panel = document.querySelector('#panel');
let selectedRating = document.querySelector('.active').getElementsByTagName('small')[0].innerHTML;

ratingsContainer.addEventListener('click', (e)=> {
  const box = e.target.closest(".rating");
  if( box){
    ratings.forEach((box)=>{box.classList.remove('active')})
    box.classList.add('active');
    selectedRating = box.getElementsByTagName('small')[0].innerHTML;
  }
})

sendBtn.addEventListener('click', (e) => {
  panel.innerHTML = `
      <i class="fas fa-heart"></i>
      <strong>Thank You!</strong>
      <br>
      <strong>Feedback: ${selectedRating}</strong>
      <p>We'll use your feedback to improve our customer support</p>
  `
})