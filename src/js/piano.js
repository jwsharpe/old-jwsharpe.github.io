const keys = document.getElementsByClassName("key");

function inputNoteOn(key) {
  const pressedKey = keys[key - 50];
  pressedKey.style = "background: #aaa;";
  APP.keyboardFlags[key] = {
    time: Date.now()
  };
  MIDI.setVolume(APP.cid, APP.volume);
  MIDI.noteOn(APP.cid, key, APP.velocity, 0);
}

function inputNoteOff(key) {
  const pressedKey = keys[key - 50];
  if (pressedKey.className.includes("black")) {
    pressedKey.style = "background: #000;";
  } else {
    pressedKey.style = "background: #fff;";
  }
  if (APP.keyboardFlags[key]) {
    MIDI.noteOff(APP.cid, key, 0);
    delay = (Date.now() - APP.keyboardFlags[key].time) / 1000.0;
    APP.keyboardFlags[key] = null;
  }
}

document.body.addEventListener("keydown", e => {
  const key = APP.notesByKey[e.key.toLowerCase()];
  if (!APP.keyboardFlags[key] && key) {
    inputNoteOn(key);
  }
});
document.body.addEventListener("keyup", e => {
  const key = APP.notesByKey[e.key.toLowerCase()];
  if (APP.keyboardFlags[key] && key) {
    inputNoteOff(key);
  }
});
