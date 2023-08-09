import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player', {
  id: 236203659,
});

const storageKey = 'videoplayer-current-time';

const savePlaybackTime = time => {
  localStorage.setItem(storageKey, JSON.stringify(time));
};

const getSavedPlaybackTime = () => {
  const savedTime = localStorage.getItem(storageKey);
  return savedTime ? JSON.parse(savedTime) : null;
};

const updatePlaybackTime = throttle(time => {
  savePlaybackTime(time);
}, 1000);

vimeoPlayer.on('timeupdate', event => {
  const currentTime = event.seconds;
  updatePlaybackTime(currentTime);
});

const savedTime = getSavedPlaybackTime();
if (savedTime !== null) {
  vimeoPlayer.setCurrentTime(savedTime);
}

window.addEventListener('beforeunload', () => {
  vimeoPlayer.getCurrentTime().then(currentTime => {
    savePlaybackTime(currentTime);
  });
});

