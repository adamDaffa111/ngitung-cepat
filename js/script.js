// setting
const saveSettingBtn = document.querySelector('#saveBtn');

// start btn 
const startBtn = document.querySelector('.start')
const highScore = document.querySelector('.high-score');

// option toggle 
const optionbtn = document.querySelector('.option-menu-btn');
const optionModal = document.querySelector("#options-modal");

// time
const timeEl = document.querySelector('#timeNumber');


saveBtn.addEventListener('click',() => {
  optionModal.classList.remove('display');
});


// modal box
optionbtn.addEventListener('click',() => {
  optionModal.classList.add('display');
});

optionModal.addEventListener('click',e => {
  if (e.target.id == "options-modal") {
  optionModal.classList.remove('display');
  }
});


let time;
timeEl.addEventListener('change',e => {
  time = e.target.value;
  setTime(time);
});


directPage('game.html',startBtn);
directPage('hight-score.html',highScore);

function directPage(page,el) {
  el.addEventListener('click',() => {
    window.location.assign(`../${page}`);
  });
}

function setTime(minute = "2.50") {
  localStorage.setItem('time',minute);
}