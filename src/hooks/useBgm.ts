import { useEffect, useRef, useState } from 'react';

interface UseBgmOptions {
  volume?: number;
}

const useBgm = ({ volume = 1 }: UseBgmOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    audioRef.current = new Audio('/assets/OneLove.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    audioRef.current.playbackRate = 0.8;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error playing BGM:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, togglePlay };
};

export default useBgm;
