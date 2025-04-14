import { useEffect, useRef, useState } from "react";

const BackgroundMusicOnScroll = () => {
  const audioRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.loop = true;
    audio.preload = "auto";

    const tryToPlay = () => {
      if (hasStarted || !audio) return;

      audio
        .play()
        .then(() => {
          let vol = 0;
          const fade = setInterval(() => {
            if (vol < 0.5) {
              vol += 0.05;
              audio.volume = vol;
            } else {
              clearInterval(fade);
            }
          }, 200);
          setHasStarted(true);
        })
        .catch((err) => {
          console.log("Autoplay blocked or audio not ready:", err);
        });
    };

    const interactionEvents = ["scroll", "click", "touchstart"];

    interactionEvents.forEach((event) => {
      window.addEventListener(event, tryToPlay);
    });

    return () => {
      interactionEvents.forEach((event) => {
        window.removeEventListener(event, tryToPlay);
      });
    };
  }, [hasStarted]);

  return (
    <audio ref={audioRef}>
      <source src="/videoplayback (1)-VEED.mp3" type="audio/mpeg" />
    </audio>
  );
};

export default BackgroundMusicOnScroll;
