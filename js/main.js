import { audioConfig, screens } from './content.js';
import { AudioController } from './audio.js';
import { setScreenIndex, setSoundEnabled } from './state.js';

const screenElements = [...document.querySelectorAll('[data-screen]')];
const screenNumber = document.querySelector('#screen-number');
const soundButton = document.querySelector('#sound-toggle');
const soundLabel = document.querySelector('#sound-label');
const announcer = document.querySelector('#screen-announcer');
const creditsDialog = document.querySelector('#credits-dialog');
const creditsCloseButton = document.querySelector('[data-credits-close]');
const audio = new AudioController(audioConfig);

const baseTitle = 'Moonlight Protocol — Strawberry Dream';
let currentIndex = 0;
let creditsTrigger = null;

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

function showScreen(index, { focus = true, announce = true } = {}) {
  if (!Number.isInteger(index) || index < 0 || index >= screenElements.length) {
    return;
  }

  currentIndex = index;

  screenElements.forEach((screen, screenIndex) => {
    const isActive = screenIndex === index;
    screen.hidden = !isActive;
    screen.classList.toggle('is-active', isActive);

    if (isActive) {
      screen.removeAttribute('aria-hidden');
    } else {
      screen.setAttribute('aria-hidden', 'true');
    }
  });

  const currentScreen = screens[index];
  screenNumber.textContent = String(index + 1).padStart(2, '0');
  document.title = index === 0 ? baseTitle : `${currentScreen.title} — Moonlight Protocol`;
  setScreenIndex(index);

  if (focus) {
    const heading = screenElements[index].querySelector('h1, h2');
    if (heading) {
      requestAnimationFrame(() => heading.focus({ preventScroll: true }));
    }
  }

  if (announce) {
    announcer.textContent = `Screen ${index + 1} of ${screens.length}: ${currentScreen.label}.`;
  }
}

function playClick() {
  audio.playSfx('click');
}

document.querySelectorAll('[data-next]').forEach((button) => {
  button.addEventListener('click', () => {
    playClick();
    showScreen(currentIndex + 1);
  });
});

document.querySelectorAll('[data-prev]').forEach((button) => {
  button.addEventListener('click', () => {
    playClick();
    showScreen(currentIndex - 1);
  });
});

document.querySelectorAll('[data-nav]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    playClick();
    showScreen(Number(link.dataset.nav));
  });
});

document.querySelectorAll('[data-replay]').forEach((button) => {
  button.addEventListener('click', () => {
    playClick();
    showScreen(0);
  });
});

function updateSoundUi(enabled) {
  soundButton.setAttribute('aria-pressed', String(enabled));
  soundLabel.textContent = enabled ? 'Sound on' : 'Sound off';
}

if (audio.supported) {
  updateSoundUi(false);

  soundButton.addEventListener('click', async () => {
    const wasEnabled = audio.enabled;

    if (wasEnabled) {
      audio.playSfx('toggle');
    }

    const result = await audio.toggle();
    updateSoundUi(result.enabled);
    setSoundEnabled(result.enabled);

    if (result.enabled) {
      audio.playSfx('toggle');
    }

    if (result.error === 'blocked') {
      announcer.textContent =
        'Audio could not start. The experience still works without sound.';
    } else if (result.error === 'unsupported') {
      announcer.textContent = 'Audio is not supported in this browser.';
    } else {
      announcer.textContent = result.enabled
        ? 'Sound on. Background music and interface sounds are now enabled.'
        : 'Sound off.';
    }
  });
} else {
  soundButton.disabled = true;
  soundButton.setAttribute('aria-pressed', 'false');
  soundLabel.textContent = 'Sound unavailable';
  soundButton.title = 'Audio is not supported in this browser.';
}

function openCredits(trigger) {
  creditsTrigger = trigger;
  if (typeof creditsDialog.showModal === 'function') {
    creditsDialog.showModal();
  } else {
    creditsDialog.setAttribute('open', '');
  }
}

function closeCredits() {
  if (typeof creditsDialog.close === 'function' && creditsDialog.open) {
    creditsDialog.close();
  } else {
    creditsDialog.removeAttribute('open');
  }
}

document.querySelectorAll('[data-credits-open]').forEach((button) => {
  button.addEventListener('click', () => openCredits(button));
});

creditsCloseButton?.addEventListener('click', closeCredits);

creditsDialog?.addEventListener('click', (event) => {
  if (event.target === creditsDialog) {
    closeCredits();
  }
});

creditsDialog?.addEventListener('close', () => {
  creditsTrigger?.focus();
});

showScreen(0, { focus: false, announce: false });
requestAnimationFrame(() => document.body.classList.add('is-ready'));
