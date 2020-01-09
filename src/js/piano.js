function inputNoteOn(key) {
  APP.keyboardFlags[key] = {
    time: Date.now()
  };
  MIDI.setVolume(APP.cid, APP.volume);
  MIDI.noteOn(APP.cid, key, APP.velocity, 0);
}

function inputNoteOff(key) {
  if (APP.keyboardFlags[key]) {
    MIDI.noteOff(APP.cid, key, 0);
    delay = (Date.now() - APP.keyboardFlags[key].time) / 1000.0;
    APP.keyboardFlags[key] = null;
  }
}

document.body.addEventListener("keydown", e => {
  const key = APP.notesByKey[e.key];
  if (!APP.keyboardFlags[key]) {
    inputNoteOn(key);
  }
});
document.body.addEventListener("keyup", e => {
  const key = APP.notesByKey[e.key];
  if (APP.keyboardFlags[key]) {
    inputNoteOff(key);
  }
});
