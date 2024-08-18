import { useEffect, useRef } from 'react';

interface UseBgmOptions {
  volume?: number;
}

const useBgm = ({ volume = 1 }: UseBgmOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleUserInteraction = () => {
      if (audioRef.current) {
        // audioRef.current.play().catch((error) => {
        //   console.error('Error playing BGM:', error);
        // });
      }
      document.removeEventListener('click', handleUserInteraction);
    };

    audioRef.current = new Audio('/assets/OneLove.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
    audioRef.current.playbackRate = 0.85;

    document.addEventListener('click', handleUserInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', handleUserInteraction);
    };
  }, [volume]);
};

export default useBgm;
