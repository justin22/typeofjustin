const synth = typeof window !== 'undefined' && window.speechSynthesis;

export function TextToSpeech({
  text
}: {
  text: string
}) {

  function sayIt(event) {
    try {
      event.preventDefault();
      const voices = synth.getVoices();
      const utterThis = new SpeechSynthesisUtterance(text);
      utterThis.voice = voices[1];
      synth.speak(utterThis);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      onClick={sayIt}
      type="button"
      className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-md shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 ring-1 ring-slate-900/10 dark:ring-slate-200/20 focus:ring" >
      Listen
      <i className='bx bx-volume-full ml-2'></i>

    </button>
  )
}