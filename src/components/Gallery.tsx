import {
  Box,
  CircularProgress,
  Fade,
  ImageList,
  ImageListItem,
  Modal,
  styled,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Gallery2 = styled(Box)({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  marginTop: '5rem',
});

const ImageContainer = styled(Box)(() => ({
  padding: '0.5rem 0.5rem 1.5rem',
  background: 'white',
  position: 'relative',
  boxShadow: '0 0 5px rgba(0,0,0,.5)',
  transformOrigin: 'center -5rem',
  '&::before': {
    content: '""',
    display: 'block',
    height: '10rem',
    width: '2px',
    background: 'saddlebrown',
    position: 'absolute',
    bottom: '100%',
    left: '50%',
  },
  '&:nth-of-type(1)': {
    animation: 'image1 5s infinite',
    transform: 'rotate(-10deg)',
  },
  '&:nth-of-type(2)': {
    animation: 'image2 4.5s infinite',
    transform: 'rotate(-4deg)',
  },
  // '&:nth-of-type(3)': {
  //   animation: 'image3 4s infinite',
  //   transform: 'rotate(-4deg)',
  // },
  '@keyframes image1': {
    '50%': {
      transform: 'rotate(10deg)',
    },
  },
  '@keyframes image2': {
    '50%': {
      transform: 'rotate(6deg)',
    },
  },
  // '@keyframes image3': {
  //   '50%': {
  //     transform: 'rotate(6deg)',
  //   },
  // },
}));

const GalleryImage = styled('img')({
  maxWidth: '100%',
});

interface IBouncingGallery {
  handleOpen: (img: string) => void;
}

const BouncingGallery: React.FC<IBouncingGallery> = ({ handleOpen }) => {
  const img1 = '/assets/gallery/7.webp';
  const img2 = '/assets/gallery/12.webp';

  const handleImageContainer = (img: string) => {
    handleOpen(img);
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <Gallery2>
        <ImageContainer onClick={() => handleImageContainer(img1)}>
          <GalleryImage src={img1} alt="img1" />
        </ImageContainer>
        <ImageContainer onClick={() => handleImageContainer(img2)}>
          <GalleryImage src={img2} alt="img2" />
        </ImageContainer>
      </Gallery2>
    </Box>
  );
};

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
      img: '/assets/gallery/11.webp',
      rows: 2,
      cols: 2,
    },
    // {
    //   img: '/assets/gallery/12.webp',
    //   rows: 2,
    //   cols: 2,
    // },
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
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          background: '#f8f3ec',
          color: '#ba8f58',
          fontSize: '1.750rem',
          fontWeight: 400,
          lineHeight: '2.5rem',
          letterSpacing: '0.2em',
          fontFamily: 'Arizonia',
        }}
      >
        Gallery
      </Typography>

      <Box component="section" sx={{ p: 2 }}>
        <BouncingGallery handleOpen={handleOpen} />

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
    </>
  );
};

export default Gallery;
