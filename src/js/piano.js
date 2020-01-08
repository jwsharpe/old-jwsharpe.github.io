const playNoteByKey = key => {
  const delay = 0;
  const velocity = 63;
  // play the note
  MIDI.setVolume(0, 127);
  MIDI.noteOn(0, key, velocity, delay);
  MIDI.noteOff(0, key, delay + 0.75);
};

const keys = document.getElementsByClassName("key");

for (let i = 0; keys.length; i++) {
  keys[i].addEventListener("click", () => playNoteByKey(i + 50));
}
