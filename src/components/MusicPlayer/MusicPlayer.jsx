import React, { useEffect, useRef, useState } from "react";

const MusicPlayer = ({ src }) => {
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true; // Loop the music
    audio.volume = 0.5; // Set initial volume
    if (isPlaying) {
      audio.play().catch((error) => console.log("Playback error:", error));
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <div className="music-controls">
      <button className="music-button" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause 🎵" : "Play ▶️"}
      </button>
    </div>
  );
};

export default MusicPlayer;
