import { useState, useEffect } from "react";

function useAudio() {
  const [duration, setDuration] = useState<number>();
  const [curTime, setCurTime] = useState<number>();
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>();

  useEffect(() => {
    const audio : HTMLAudioElement = document.getElementById("audio") as HTMLAudioElement;

    const setAudioData = () => {
      setDuration(audio?.duration);
      setCurTime(audio?.currentTime);
    }

    const setAudioTime = () => setCurTime(audio?.currentTime);

    audio?.addEventListener("loadeddata", setAudioData);

    audio?.addEventListener("timeupdate", setAudioTime);

    playing ? audio?.play() : audio?.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    } 

    // effect cleanup
    return () => {
      audio?.removeEventListener("loadeddata", setAudioData);
      audio?.removeEventListener("timeupdate", setAudioTime);
    }
  });

  return {
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  }
}

export default useAudio;