export class AudioController {
  constructor(config) {
    this.supported = typeof window !== 'undefined' && typeof window.Audio === 'function';
    this.enabled = false;
    this.music = null;
    this.sfx = new Map();

    if (!this.supported) {
      return;
    }

    try {
      this.music = new Audio(config.music);
      this.music.loop = true;
      this.music.preload = 'none';
      this.music.volume = 0.22;

      for (const [name, source] of Object.entries(config.sfx)) {
        const sound = new Audio(source);
        sound.preload = 'none';
        this.sfx.set(name, sound);
      }
    } catch {
      this.supported = false;
    }
  }

  async toggle() {
    if (!this.supported || !this.music) {
      return { enabled: false, error: 'unsupported' };
    }

    if (this.enabled) {
      this.music.pause();
      this.enabled = false;
      return { enabled: false };
    }

    try {
      await this.music.play();
      this.enabled = true;
      return { enabled: true };
    } catch {
      this.enabled = false;
      return { enabled: false, error: 'blocked' };
    }
  }

  playSfx(name) {
    if (!this.enabled) {
      return;
    }

    const source = this.sfx.get(name);
    if (!source) {
      return;
    }

    const sound = source.cloneNode(true);
    sound.volume = 0.32;
    const playback = sound.play();
    if (playback && typeof playback.catch === 'function') {
      playback.catch(() => {
        // Sound effects are optional; a failed cue must not interrupt the experience.
      });
    }
  }
}
