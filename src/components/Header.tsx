import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        {/* <Box
          className="vertical-item tit"
          sx={{
            zIndex: 10,
            position: 'absolute',
            left: '50%',
            top: '1rem',
            width: 'auto',
            padding: '0.938rem 0.625rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.6)',
            transform: 'translate(-50%, 0)',
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: '0.688rem',
              fontWeight: 300,
              lineHeight: '0.938rem',
              color: '#7c6a52',
              paddingBottom: '1.250rem',
              backgroundImage: 'url(/assets/bar.png)',
              backgroundPosition: 'center bottom',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '0.438rem auto',
              whiteSpace: 'nowrap',
            }}
          >
            두 사람의
            <br />
            결혼식
          </Typography>
          <Box
            sx={{
              fontSize: '1rem',
              fontWeight: 400,
              lineHeight: '1.500rem',
              color: '#414141',
            }}
          >
            <Typography>이철중</Typography>
            <Typography>후지와라 아야코</Typography>
          </Box>
        </Box> */}

        <Box py={2}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" component="div" textAlign="center">
              24 / 10 / 12
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography>SATURDAY</Typography>
          </Box>
        </Box>

        <Box
          className="vertical-item photo"
          sx={{
            position: 'relative',
          }}
        >
          <Box
            component="img"
            src="/assets/header.jpg"
            alt=""
            sx={{
              maxWidth: '100%',
              verticalAlign: 'top',
              fontSize: 0,
              border: 'none',
              objectFit: 'cover',
            }}
          />
        </Box>

        <Box pt={2}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" component="div" textAlign="center">
              이철중 / 후지와라 아야코
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
