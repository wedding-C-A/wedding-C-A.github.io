import { Box, Typography } from '@mui/material';

const Header = () => {
  return (
    <Box component="section" sx={{ p: 2 }}>
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Box py={2}>
          <Box display="flex" justifyContent="center">
            <Typography variant="h6" component="div" textAlign="center">
              24 / 10 / 12
            </Typography>
            <Typography
              variant="h6"
              component="div"
              textAlign="center"
              color="#004cff"
              ml={1}
            >
              (sat)
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Typography>13:00</Typography>
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
            src="/assets/header.webp"
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
            <Typography variant="h5" component="div" textAlign="center">
              이철중 / 후지와라 아야코
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
