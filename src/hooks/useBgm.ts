import { useEffect, useRef, useState } from 'react';

interface UseBgmOptions {
  volume?: number;
}

const useBgm = ({ volume = 1 }: UseBgmOptions) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [savedTime, setSavedTime] = useState<number>(0); // Save the current time of the audio
  const [wasPlaying, setWasPlaying] = useState<boolean>(false); // Save if audio was playing

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio('/assets/bgm.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = volume;
      audioRef.current.playbackRate = 0.8;
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        // Pause audio when the tab is not visible
        if (audioRef.current) {
          setSavedTime(audioRef.current.currentTime); // Save the current time
          setWasPlaying(isPlaying); // Save if audio was playing
          audioRef.current.pause();
          setIsPlaying(false);
        }
      } else {
        // Resume audio when the tab becomes visible
        if (audioRef.current) {
          audioRef.current.currentTime = savedTime; // Restore the saved time
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
    if (isPlaying) {
      audioRef.current.play().catch((error) => {
        console.error('Error starting BGM:', error);
      });
    }

    // Cleanup
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [volume, isPlaying, savedTime, wasPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setSavedTime(audioRef.current.currentTime); // Save the current time before pausing
        setWasPlaying(false); // Update wasPlaying status
      } else {
        audioRef.current.play().catch((error) => {
          console.error('Error playing BGM:', error);
        });
        setWasPlaying(true); // Update wasPlaying status
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, togglePlay };
};

export default useBgm;
