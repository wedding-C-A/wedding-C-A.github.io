import { Box, Paper, styled, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

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

const Greeting = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observedElement = ref.current;

    console.info('observedElement', observedElement);

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
            " 이제 서로, 평생 함께 "
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
            서로가 마주보며 다져온 사랑을
            <br />
            이제 함께 한 곳을 바라보며
            <br />
            걸어갈 수 있는 큰 사랑으로
            <br />
            키우고자 합니다. <br />
            저희 두 사람이 사랑의 이름으로
            <br />
            지켜나갈 수 있도록
            <br />
            앞날을 축복해 주시면
            <br />
            감사하겠습니다.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" sx={{ fontSize: '0.8rem' }}>
            이종식・양해숙의 장남 철중
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2" sx={{ fontSize: '0.8rem' }}>
            후지와라 타쿠야・리에코의 삼녀 아야코
          </Typography>
        </Box>
      </Paper>
    </FadeInOutBox>
  );
};

export default Greeting;
