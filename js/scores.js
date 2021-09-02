const table = document.querySelector('#table tbody');
const mainMenu = document.querySelector('#mainMenu');
let userScores = JSON.parse(localStorage.getItem('scores'));


mainMenu.addEventListener('click',() => {
  window.location.assign('index.html');
});
function generateCellTableScore() {
  userScores.forEach(obj => {
    const row = table.insertRow(0);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
  
    cell1.innerHTML = obj.name;
    cell2.innerHTML = obj.trueAnswer;
    cell3.innerHTML = obj.falseAnswer;
    cell4.innerHTML = obj.score;
  });
}

generateCellTableScore();