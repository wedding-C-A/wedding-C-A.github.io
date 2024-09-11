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
        backgroundColor: '#cec2ac',
        '&:hover': {
          backgroundColor: '#cec2ac',
        },
        '&:active': {
          backgroundColor: '#cec2ac',
        },
        '&:focus': {
          backgroundColor: '#cec2ac',
        },
      }}
    >
      {isPlaying ? (
        <VolumeUpIcon sx={{ color: 'white' }} />
      ) : (
        <VolumeOffIcon sx={{ color: 'white' }} />
      )}
    </Fab>
  );
};

export default Sound;
