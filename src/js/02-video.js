import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = new Player('vimeo-player', {
  id: 236203659,
});

const storageKey = 'videoplayer-current-time';

const savePlaybackTime = throttle(time => {
  localStorage.setItem(storageKey, JSON.stringify(time));
}, 1000);

const getSavedPlaybackTime = () => {
  const savedTime = localStorage.getItem(storageKey);
  return savedTime ? JSON.parse(savedTime) : null;
};

vimeoPlayer.on('timeupdate', event => {
  savePlaybackTime(event.seconds);
});

const savedTime = getSavedPlaybackTime();
if (savedTime !== null) {
  vimeoPlayer.setCurrentTime(savedTime);
}

window.addEventListener('beforeunload', async () => {
  const currentTime = await vimeoPlayer.getCurrentTime();
  savePlaybackTime(currentTime);
});
