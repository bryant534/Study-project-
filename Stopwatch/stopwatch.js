const presets = document.querySelectorAll('.preset');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const countdownEl = document.querySelector('.countdown');
const bar = document.querySelector('.progress .bar');
const audio = document.getElementById('audio');
const playlist = document.getElementById('playlist');
const vol = document.getElementById('vol');
const msg = document.getElementById('message');
const themeToggle = document.getElementById('themeToggle');


let totalSeconds = 0;
let remainingSeconds = 0;
let timerInterval = null;
let isRunning = false;

// default audio sources (replace with your own files)
const sources = {
lofi: 'assets/lofi.mp3',
rain: 'assets/rain.mp3',
piano: 'assets/piano.mp3'
}


function setAudioFromPlaylist(){
const p = playlist.value;
audio.src = sources[p];
}


playlist.addEventListener('change', setAudioFromPlaylist);
vol.addEventListener('input', ()=> audio.volume = vol.value);
setAudioFromPlaylist();

presets.forEach(btn=>{
btn.addEventListener('click', ()=>{
const mins = Number(btn.dataset.minutes);
totalSeconds = mins * 60;
remainingSeconds = totalSeconds;
updateCountdown();
updateProgress();
})
})

function updateCountdown(){
updateCountdown();
updateProgress();
}


function startSession(){
if(totalSeconds===0) return alert('Pilih durasi dulu');
if(!isRunning){
timerInterval = setInterval(tick, 1000);
audio.play().catch(e=> console.log('Audio play prevented until user interacts.'));
isRunning = true;
}
}
function pauseSession(){
if(isRunning){
clearInterval(timerInterval);
audio.pause();
isRunning = false;
}
}
function stopSession(finished=false){
clearInterval(timerInterval);
isRunning = false;
remainingSeconds = 0;
totalSeconds = 0;
updateCountdown();
updateProgress();
audio.pause();
audio.currentTime = 0;


if(finished){
msg.textContent = '🎉 Session completed! Take a short break.';
msg.style.display = 'block';
setTimeout(()=> msg.style.display='none', 5000);
}
}


startBtn.addEventListener('click', startSession);
pauseBtn.addEventListener('click', pauseSession);
stopBtn.addEventListener('click', ()=> stopSession(false));


// theme toggle
themeToggle.addEventListener('change', ()=>{
if(themeToggle.checked) document.body.classList.add('theme-dark');
else document.body.classList.remove('theme-dark');
});


// initialize countdown
updateCountdown();