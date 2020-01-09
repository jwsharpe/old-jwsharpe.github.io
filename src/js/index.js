window.onload = function() {
  MIDI.loadPlugin({
    soundfontUrl: "../dependencies/fatboy/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: function() {
      anime({
        targets: "#keys",
        height: "160px",
        duration: 1200,
        easing: "easeInOutQuad",
        delay: "100",
        complete: function(anim) {
          console.log("done");
        }
      });
    }
  });
};
