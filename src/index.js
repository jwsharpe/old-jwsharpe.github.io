window.onload = function() {
  MIDI.loadPlugin({
    soundfontUrl: "../dependencies/fatboy/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {
      console.log("loaded");
    }
  });
};

const playNote = () => {
  console.log("played");
  var delay = 0; // play one note every quarter second
  var note = 50; // the MIDI note
  var velocity = 63; // how hard the note hits
  // play the note
  MIDI.setVolume(0, 127);
  MIDI.noteOn(0, note, velocity, delay);
  MIDI.noteOff(0, note, delay + 0.75);
};
const play = document.getElementById("piano");
play.addEventListener("click", playNote);
