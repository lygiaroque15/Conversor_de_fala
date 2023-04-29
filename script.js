const textareaEl = document.querySelector(".textarea");

const textToSpeechBtnEl = document.querySelector(".textoParaFalarBtn");

const speakerIconEl = document.querySelector(".falarrIcone");

let speaking = true;


const textToSpeech = () => {
  const synth = window.speechSynthesis;
  const text = textareaEl.value;

  if (!synth.speaking && text) {
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  }

    if (synth.speaking && speaking) {
      textToSpeechBtnEl.innerText = "Pausa";
      synth.resume();
      speaking = false;
    falarIconeEl.innerHTML = "&#128266;";
    } else {
      textToSpeechBtnEl.innerText = "Retomar";
      synth.pause();
      speaking = true;
    falarIconeEl.innerHTML = "&#128264;";
    }

  setInterval(() => {
    if (!synth.speaking && !speaking) {
      speaking = true;
      textToSpeechBtnEl.innerText = "Text to Speech";
    }
  });
};

textToSpeechBtnEl.addEventListener("click", textToSpeech);