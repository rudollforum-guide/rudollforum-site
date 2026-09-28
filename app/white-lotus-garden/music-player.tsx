"use client";

import { useEffect, useRef, useState } from "react";

export function WhiteLotusMusicPlayer({src}:{src:string}) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing,setPlaying] = useState(false);

  useEffect(() => () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
  },[]);

  async function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  }

  return <div className="white-lotus-player">
    <audio ref={audioRef} src={src} preload="metadata" loop onPause={()=>setPlaying(false)} onPlay={()=>setPlaying(true)}/>
    <button type="button" className="white-lotus-player-button" onClick={togglePlayback} aria-pressed={playing}>
      <span className="white-lotus-player-symbol" aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
      <span>{playing ? "Пауза" : "Включить музыку"}</span>
      <span className={`white-lotus-player-wave${playing ? " is-playing" : ""}`} aria-hidden="true"><i/><i/><i/><i/></span>
    </button>
    <small>Музыка включается только по вашему выбору</small>
  </div>;
}
