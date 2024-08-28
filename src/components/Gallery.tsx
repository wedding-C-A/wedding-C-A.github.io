import {
  Box,
  CircularProgress,
  Fade,
  ImageList,
  ImageListItem,
  Modal,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Gallery: React.FC = () => {
  const itemData = [
    {
      img: '/assets/gallery/4.webp',
      rows: 2,
      cols: 2,
    },
    {
      img: '/assets/gallery/5.webp',
      cols: 2,
    },
    {
      img: '/assets/gallery/8.webp',
      cols: 2,
    },
    {
      img: '/assets/gallery/6.webp',
      cols: 2,
    },
    {
      img: '/assets/gallery/7.webp',
      rows: 2,
      cols: 2,
    },
    {
      img: '/assets/gallery/12.webp',
      rows: 2,
      cols: 2,
    },
    {
      img: '/assets/gallery/2.webp',
      cols: 2,
    },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleOpen = (img: string) => {
    setSelectedImage(img);
    setLoading(true);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setLoading(false);
  };

  useEffect(() => {
    if (selectedImage) {
      const img = new Image();
      img.src = selectedImage;
      img.onload = () => setLoading(false);
    }
  }, [selectedImage]);

  const srcset = (image: string, size: number, rows = 1, cols = 1) => {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  };

  return (
    <Box component="section" sx={{ p: 2 }}>
      <ImageList variant="quilted" cols={4} rowHeight={121}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            onClick={() => handleOpen(item.img)}
            sx={{ cursor: 'pointer' }}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open} timeout={{ enter: 1500, exit: 1000 }}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 600,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {loading ? (
              <CircularProgress />
            ) : (
              <img
                src={selectedImage || ''}
                alt="Selected"
                style={{ width: '100%', height: 'auto' }}
              />
            )}
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Gallery;
