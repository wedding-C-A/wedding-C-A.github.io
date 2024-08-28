import { Box, Paper, styled, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import useLanguage from '../hooks/useLanguage';

const FadeInOutBox = styled(Box)(() => ({
  opacity: 0,
  transition: 'opacity 2s ease-in-out',
  // Initial state
  '&.fade-in': {
    opacity: 1,
  },
  // Animation state
  '&.fade-out': {
    opacity: 0,
  },
}));

const Greeting: React.FC = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const message = useLanguage();

  useEffect(() => {
    const observedElement = ref.current;

    if (observedElement) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setShow(true);
          } else {
            setShow(false);
          }
        },
        {
          threshold: 0,
        },
      );

      observer.observe(observedElement);

      return () => {
        observer.unobserve(observedElement);
      };
    }
  }, []);

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
          marginBottom: '1rem',
          letterSpacing: '0.2em',
          fontFamily: 'Arizonia',
        }}
      >
        {message.greeting.title}
      </Typography>

      <FadeInOutBox
        component="section"
        sx={{ p: 2 }}
        ref={ref}
        className={show ? 'fade-in' : 'fade-out'}
      >
        <Paper sx={{ py: 2 }}>
          <Box>
            <Typography
              variant="h3"
              sx={{
                fontSize: '0.8rem',
                marginBottom: '2.5rem',
                fontSizeAdjust: '0.875rem',
                fontWeight: 400,
                lineHeight: 1,
                textAlign: 'center',
                color: '#ba8f58',
                letterSpacing: '0.2em',
              }}
            >
              {message.greeting.header}
            </Typography>
          </Box>
          <Box
            sx={{
              marginBottom: '2.563rem',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                left: '50%',
                bottom: '-30px',
                width: '1px',
                height: '1.575rem',
                background: '#999',
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontSize: '0.813rem',
                fontWeight: 300,
                lineHeight: '1.5rem',
                color: '#111',
                textAlign: 'center',
                whiteSpace: 'pre-wrap',
              }}
            >
              {message.greeting.body}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" sx={{ fontSize: '0.8rem' }}>
              {message.greeting.groom}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h2" sx={{ fontSize: '0.8rem' }}>
              {message.greeting.bride}
            </Typography>
          </Box>
        </Paper>
      </FadeInOutBox>
    </>
  );
};

export default Greeting;
