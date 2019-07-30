let playing = false;
let current_video;

const videos = [...document.querySelectorAll('video')];
const header = document.querySelector('h1');

document.addEventListener('keydown', function(e) {
  index = parseInt(e.key) - 1
  if (isNaN(index) || index >= videos.length) return;
  header.classList.remove('active')
  playVideo(index);
});

playVideo = function(play_index) {
  videos.forEach((video, index) => {
    if (index == play_index) {
      video.classList.add('active');
      video.play();
    } else {
      video.classList.remove('active');
      video.pause();
      video.currentTime = 0;
    }
  })
}

videos.forEach(video =>  {
  video.addEventListener('ended', () => {
    header.classList.add('active');
    video.classList.remove('active');
  })
})
