import { useEffect, useRef, useState } from 'react';

interface UseBgmOptions {
  volume?: number;
}

const useBgm = ({ volume = 1 }: UseBgmOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(
    new Audio('/assets/bgm.mp3'),
  );
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [savedTime, setSavedTime] = useState<number>(0);
  const [wasPlaying, setWasPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Initialize audio only once
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = 0.8;
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Pause audio and save the current time and playing status
        if (audioRef.current) {
          setSavedTime(audioRef.current.currentTime);
          setWasPlaying(isPlaying);
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        // Resume audio with the saved time and playing status
        if (audioRef.current) {
          audioRef.current.currentTime = savedTime;
          if (wasPlaying) {
            audioRef.current.play().catch((error) => {
              console.error('Error playing BGM:', error);
            });
            setIsPlaying(true);
          }
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Initial play if needed
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error starting BGM:', error);
      });
    }

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [volume, isPlaying, savedTime, wasPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setSavedTime(audioRef.current.currentTime);
        setWasPlaying(false);
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error playing BGM:', error);
        });
        setWasPlaying(true);
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, togglePlay };
};

export default useBgm;
