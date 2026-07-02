// Video - custom player controls: play/pause, progress, playback speed, mute
const video = document.getElementById('video');
const playBtn = document.getElementById('play-btn');
const progress = document.getElementById('progress');
const timeLabel = document.getElementById('time');
const speedSelect = document.getElementById('speed');
const muteBtn = document.getElementById('mute-btn');

function formatTime(seconds){
  if(isNaN(seconds)) return '00:00';
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

playBtn.addEventListener('click', () => {
  if(video.paused){
    video.play();
    playBtn.innerHTML = '&#10074;&#10074; Pause';
  } else {
    video.pause();
    playBtn.innerHTML = '&#9658; Play';
  }
});

video.addEventListener('timeupdate', () => {
  if(video.duration){
    progress.value = (video.currentTime / video.duration) * 100;
    timeLabel.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
  }
});

progress.addEventListener('input', () => {
  if(video.duration){
    video.currentTime = (progress.value / 100) * video.duration;
  }
});

speedSelect.addEventListener('change', () => {
  video.playbackRate = parseFloat(speedSelect.value);
});

muteBtn.addEventListener('click', () => {
  video.muted = !video.muted;
  muteBtn.innerHTML = video.muted ? '&#128263;' : '&#128266;';
});

video.addEventListener('ended', () => {
  playBtn.innerHTML = '&#9658; Play';
});
