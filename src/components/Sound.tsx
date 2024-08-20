import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { Fab } from '@mui/material';
import useBgm from '../hooks/useBgm';

const Sound = () => {
  const { isPlaying, togglePlay } = useBgm({
    volume: 0.5,
  });

  return (
    <Fab
      aria-label="sound"
      size="small"
      onClick={togglePlay}
      sx={{
        position: 'fixed',
        right: 16,
        zIndex: 1000,
        backgroundColor: '#e57373',
        '&:hover': {
          backgroundColor: '#e57373',
        },
        '&:active': {
          backgroundColor: '#e57373',
        },
        '&:focus': {
          backgroundColor: '#e57373',
        },
      }}
    >
      {isPlaying ? <VolumeUpIcon /> : <VolumeOffIcon />}
    </Fab>
  );
};

export default Sound;
