const state = {
  screenIndex: 0,
  soundEnabled: false,
};

export function getState() {
  return { ...state };
}

export function setScreenIndex(index) {
  state.screenIndex = index;
}

export function setSoundEnabled(enabled) {
  state.soundEnabled = Boolean(enabled);
}
