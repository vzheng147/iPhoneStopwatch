
const lapOrResetButtonElement = document.querySelector('.js-LapOrResetButton');

const startOrStopButtonElement = document.querySelector('.js-StartOrStopButton');

lapOrResetButtonElement.addEventListener('click', ()=>{lapOrResetButtonHandler()});

startOrStopButtonElement.addEventListener('click', ()=>{startOrStopButtonHandler()});

function lapOrResetButtonHandler(){
  if (lapOrResetButtonElement.innerHTML.trim() === 'Lap'){
    logs.push(lapTime);
    updateLog();
    lapTime = [0, 0, 0];
  } else if (lapOrResetButtonElement.innerHTML.trim() === 'Reset'){
    clearInterval(clearIntervalID);
    document.querySelector('.laps').innerHTML = '';
    time[0] = 0;
    time[1] = 0;
    time[2] = 0;
    updateTimerHTML();
    logs.splice(0, logs.length);
    lapTime[0] = 0;
    lapTime[1] = 0;
    lapTime[2] = 0;
    index = 0;
    updateLapTimerHTML();
    lapOrResetButtonElement.innerHTML = 'Lap';
    lapOrResetButtonElement.classList.add('initialLapButton');
    startOrStopButtonElement.innerHTML = 'Start';
    startOrStopButtonElement.classList.remove('stopButton');
  }
}

let clearIntervalID = null;

function startOrStopButtonHandler() {
  if (startOrStopButtonElement.innerHTML.trim() === 'Start') {
    lapOrResetButtonElement.innerHTML = 'Lap';
    lapOrResetButtonElement.classList.remove('initialLapButton');
    startOrStopButtonElement.classList.add('stopButton');
    startOrStopButtonElement.innerHTML = 'Stop';
    clearIntervalID = setInterval(() => updateTime(time), 10);
  } else if (startOrStopButtonElement.innerHTML.trim() === 'Stop') {
    startOrStopButtonElement.classList.remove('stopButton');
    startOrStopButtonElement.innerHTML = 'Start';
    clearInterval(clearIntervalID);
    lapOrResetButtonElement.innerHTML = 'Reset';
  }
}