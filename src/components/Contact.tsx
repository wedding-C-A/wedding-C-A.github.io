import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import { Box, IconButton, Paper, Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          textAlign: 'center',
          background: '#f8f3ec',
          color: '#ba8f58',
          fontSize: '0.750rem',
          fontWeight: 400,
          lineHeight: '2.5rem',
        }}
      >
        혼주에게 연락하기
      </Typography>
      <Box component="section" sx={{ p: 2 }}>
        <Paper sx={{ py: 2, display: 'flex' }}>
          <Box sx={{ flex: 1, p: 2, borderRight: '1px solid #ccc' }}>
            <Typography variant="h6">신랑측 혼주</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">아버지 이종식</Typography>
              <Typography variant="body1">
                <IconButton
                  href="tel:+4712345678"
                  aria-label="Call 신랑 아버지"
                  sx={{
                    backgroundColor: '#a3dad9',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#a3dad9',
                    },
                    p: 1,
                    mr: 2,
                  }}
                >
                  <CallIcon />
                </IconButton>
                <IconButton
                  href="sms:+4712345678"
                  aria-label="Sms 신랑 아버지"
                  sx={{
                    backgroundColor: '#a3dad9',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#a3dad9',
                    },
                    p: 1,
                  }}
                >
                  <SmsIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">어머니 양해숙</Typography>
              <Typography variant="body1">
                <IconButton
                  href="sms:+4712345678"
                  aria-label="Sms 신랑 어머니"
                  sx={{
                    backgroundColor: '#a3dad9',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#a3dad9',
                    },
                    p: 1,
                    mr: 2,
                  }}
                >
                  <CallIcon />
                </IconButton>
                <IconButton
                  href="sms:+4712345678"
                  aria-label="Sms 신랑 어머니"
                  sx={{
                    backgroundColor: '#a3dad9',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#a3dad9',
                    },
                    p: 1,
                  }}
                >
                  <SmsIcon />
                </IconButton>
              </Typography>
            </Box>
          </Box>

          {/* 신부측 연락처 */}
          <Box sx={{ flex: 1, p: 2 }}>
            <Typography variant="h6">신부측 혼주</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">아버지 후지와라 타쿠야</Typography>
              <Typography variant="body2"></Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">어머니 후지와라 리에코</Typography>
              <Typography variant="body2"></Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Contact;
