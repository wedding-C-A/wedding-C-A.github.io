import { useEffect, useRef, useState } from 'react';

interface UseBgmOptions {
  volume?: number;
}

const useBgm = ({ volume = 1 }: UseBgmOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [savedTime, setSavedTime] = useState<number>(0);
  const [wasPlaying, setWasPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/bgm.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = 0.8;
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        if (audioRef.current) {
          setSavedTime(audioRef.current.currentTime);
          setWasPlaying(isPlaying);
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
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

  const isMobileDevice = () => {
    return /Mobi|Android/i.test(navigator.userAgent);
  };

  useEffect(() => {
    // Automatically play audio on mobile devices only
    if (isMobileDevice() && audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error('Error starting BGM:', error);
      });
      setIsPlaying(true);
    }
  }, []);

  return { isPlaying, togglePlay };
};

export default useBgm;
