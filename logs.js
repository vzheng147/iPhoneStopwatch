
const time = [0, 0, 0];
let lapTime = [0, 0, 0];

const logs = [];
let index = 0;

function updateTime(){
  time[2] += 1;
  lapTime[2] += 1;

  if (time[2] === 100){
    time[2] = 0;
    time[1] += 1;
  }
  if (lapTime[2] === 100){
    lapTime[2] = 0;
    lapTime[1] += 1;
  }
  if (time[1] === 60){
    time[1] = 0;
    time[0] += 1;
  }
  if (lapTime[1] === 60){
    lapTime[1] = 0;
    lapTime[0] += 1;
  }
  updateTimerHTML();
  updateLapTimerHTML();
}

function addZeroToSingle(number){
  return (10 > number) ? "0"+number : number;
}

function updateTimerHTML(){
  document.querySelector('.js-min').innerHTML = `${addZeroToSingle(time[0])}`;
  document.querySelector('.js-sec').innerHTML = `${addZeroToSingle(time[1])}`;
  document.querySelector('.js-hundredthSec').innerHTML = `${addZeroToSingle(time[2])}`;
}

function updateLapTimerHTML(){
  document.querySelector('.js-lapNumber').innerHTML = `Lap ${logs.length+1}`;
  document.querySelector('.js-lapMin').innerHTML = `${addZeroToSingle(lapTime[0])}`;
  document.querySelector('.js-lapSec').innerHTML = `${addZeroToSingle(lapTime[1])}`;
  document.querySelector('.js-lapHundredthSec').innerHTML = `${addZeroToSingle(lapTime[2])}`;
}

function updateLog(){
  const timeOfLap = logs[index]; 
  const html = `
    <div class="js-text-color-interval js-lap${index+1}">
      <p class="lapNumber loggedLapNumber">Lap ${index+1}</p>
      <p class="lapTimer">
        <span class="loggedMin">${addZeroToSingle(timeOfLap[0])}</span> :
        <span class="loggedSec">${addZeroToSingle(timeOfLap[1])}</span> .
        <span class="loggedHundredthSec">${addZeroToSingle(timeOfLap[2])}</span>
      </p>
    </div>`;
  index++;
  document.querySelector('.innerContainer').innerHTML = html + document.querySelector('.innerContainer').innerHTML;
}

function updateQuickestInterval(){
  if (logs.length >= 2){
    let lapSection = document.querySelectorAll('.js-text-color-interval');
    lapSection.forEach((element)=> element.classList.remove('quickestIntervalText'));
    let lowestIndex = 0;
    let lowestInterval = logs[lowestIndex];
    logs.forEach((element, index) => {
      lowestInterval = logs[lowestIndex];
      if (index === 0){
        console.log('Index 0');
        return;
      }
      if (lowestInterval[0] > element[0]) {
        lowestIndex = index;
        console.log("Lowest Min");
      } else if (lowestInterval[0] === element[0]) {
          if (lowestInterval[1] > element[1]) {
            lowestIndex = index;
            console.log("Lowest Second");
          } else if (lowestInterval[1] === element[1]) {
            if (lowestInterval[2] > element[2]) {
                lowestIndex = index;
                console.log("Lowest Mili Second");
            }
          }
      } 
    });
    document.querySelector(`.js-lap${lowestIndex+1}`).classList.add('quickestIntervalText');
  }
}

function updateLongestInterval(){
  if (logs.length >= 2){
    let lapSection = document.querySelectorAll('.js-text-color-interval');
    lapSection.forEach((element)=> element.classList.remove('longestIntervalText'));
    let highestIndex = 0;
    let highestInterval = logs[highestIndex];
    logs.forEach((element, index) => {
      highestInterval = logs[highestIndex];
      if (index === 0){
        console.log('Index 0');
        return;
      }
      if (highestInterval[0] < element[0]) {
        highestIndex = index;
        console.log("Lowest Min");
      } else if (highestInterval[0] === element[0]) {
          if (highestInterval[1] < element[1]) {
            highestIndex = index;
            console.log("Lowest Second");
          } else if (highestInterval[1] === element[1]) {
            if (highestInterval[2] < element[2]) {
                highestIndex = index;
                console.log("Lowest Mili Second");
            }
          }
      } 
    });
    console.log(document.querySelector(`.js-lap${highestIndex+1}`).classList.add('longestIntervalText'));
  }
}

