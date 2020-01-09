window.onload = function() {
  MIDI.loadPlugin({
    soundfontUrl: "../dependencies/fatboy/",
    instrument: "acoustic_grand_piano",
    onprogress: function(state, progress) {
      console.log(state, progress);
    },
    onsuccess: animatePiano
  });
};

const animatePiano = () => {
  anime({
    targets: "#keys",
    height: "160px",
    duration: 800,
    easing: "easeInOutQuad",
    delay: "150",
    complete: animateMain
  });
};
const animateMain = () => {
  document.getElementById("main").style = "";
  anime({
    targets: "#main",
    translateX: "120px",
    opacity: 0,
    duration: 2000,
    easing: "easeInOutQuad",
    delay: "150",
    direction: "reverse",
    complete: animateActions
  });
};
const animateActions = () => {
  anime({
    targets: "li",
    translateX: "120px",
    opacity: 0,
    duration: 2000,
    easing: "easeInOutQuad",
    direction: "reverse",
    delay: "150"
  });
};
