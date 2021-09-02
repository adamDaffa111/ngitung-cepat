const trueAnswer = localStorage.getItem('true-answer');
const falseAnswer = localStorage.getItem('false-answer');
const totalQusetion = localStorage.getItem('total-question');
const score = +trueAnswer - +falseAnswer;

const scoreEl = document.querySelector('.score');
const trueEl = document.querySelector('.true span');
const falseEl = document.querySelector('.false span')

const inputName = document.querySelector('input#username');
const saveBtn = document.querySelector('#saveBtn');

const mainMenu = document.querySelector('#mainMenu');
const playBtn = document.querySelector('#playAgain');
const highScore = document.querySelector('#highScore');






document.addEventListener('DOMContentLoaded',() => {
  
  checkpoint(trueAnswer,trueEl);
  checkpoint(falseAnswer,falseEl);
  
  // trueEl.innerHTML = trueAnswer;
  // falseEl.innerHTML = falseAnswer;
   scoreEl.innerHTML = score;
});

directPage('index.html',mainMenu);
directPage('game.html',playBtn);
directPage('hight-score.html',highScore);

function directPage(page,el) {
  el.addEventListener('click',() => {
    window.location.assign(`../${page}`);
  });
}

function checkpoint(val,el) {
  if (val == 0 || val == null) {
    el.innerHTML = "0";
  }else {
    el.innerHTML = val;
  }
}



// save username & user score
let scores = [];
let userScore;
saveBtn.addEventListener('click',(e) => {
  userScore = {
    name: inputName.value,
    trueAnswer,
    falseAnswer,
    score
  };
  addLocalScore(userScore);
  inputName.value = '';
  
  alert ('score terlah disimpan');
});

function addLocalScore(score){
  let localScore = getLocalScore();
  localScore.push(score);
  localStorage.setItem('scores',JSON.stringify(localScore));
}

function getLocalScore() {
  let scores;
  if (localStorage.getItem('scores') == null) {
    scores = [];
  }else {
    scores = JSON.parse(localStorage.getItem('scores'));
  }
  return scores;
}