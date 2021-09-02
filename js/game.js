const opr1El = document.querySelector('.operand-1');
const opr2El = document.querySelector('.operand-2');
const secondEl = document.querySelector('#timer');
const progress = document.querySelector('#progress');
const answerCol = document.querySelector('#answer');



// buat generator angka random
function generateRandomNumb() {
  const oprand1 = Math.floor(Math.random() * 10);
  const oprand2 = Math.floor(Math.random() * 10);
  return [oprand1,oprand2];
}


let TIME = +localStorage.getItem('time') * 60;
let minutes,seconds;
let score = 0;
let totalQuestion = 0;
let correct = 0;
let incorrect = 0;


secondEl.innerHTML = `00 : 00`;
progress.style.animationDuration = TIME + 's';

setInterval(function() {
  minutes = Math.floor(TIME/60);
  seconds = TIME % 60;
  seconds = seconds < 10 ? '0' + seconds : seconds;
  if (seconds <= 29){
    document.querySelector('.loader-wrapper').style.display = "none";
  }
   if (TIME <= 1) {
    secondEl.innerHTML = "0";
    window.location.assign("../end.html")
    return true
  }else {
    secondEl.innerHTML = `${minutes} : ${seconds}`;
  }
  TIME--;
}, 1000);


// new question 
function nextQuestion(){
  const [numb1,numb2] = generateRandomNumb();
  opr1El.innerHTML = numb1;
  opr2El.innerHTML = numb2;
}

// jalankan saat pertama kali halaman dibuka
nextQuestion();

// calculate 
answerCol.addEventListener('keypress', (e) => {

  if (e.key == 'Enter') {
    // ambil kedua nomor operand
    const numbOpr1 = +opr1El.innerText;
    const numbOpr2 = +opr2El.innerText;
    const correctAnswer = numbOpr1 + numbOpr2;
    const answer = +e.target.value;
    

    
    // cek apakah jawaban benar
    if(answer === correctAnswer){
      nextQuestion();
      correct++
      
      localStorage.setItem('true-answer',correct);
      
      // total soal
      totalQuestion++; 
    }else {
      nextQuestion();
      incorrect++
      localStorage.setItem('false-answer',incorrect);

      // total soal
      totalQuestion++;
    }
    // bersihkan field
    e.target.value = '';
    localStorage.setItem('total-question',totalQuestion);
    
  }
});


