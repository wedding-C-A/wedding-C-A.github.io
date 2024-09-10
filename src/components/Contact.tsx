import CallIcon from '@mui/icons-material/Call';
import SmsIcon from '@mui/icons-material/Sms';
import { Box, IconButton, Paper, Typography } from '@mui/material';
import useLanguage from '../hooks/useLanguage';

const Contact: React.FC = () => {
  const message = useLanguage();

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
        {message.contact.title}
      </Typography>
      <Box component="section" sx={{ p: 2 }}>
        <Paper sx={{ py: 2, display: 'flex' }}>
          <Box sx={{ flex: 1, p: 2, borderRight: '1px solid #ccc' }}>
            <Typography variant="h6">
              {message.contact.groomHost.title}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                {message.contact.groomHost.father.name}
              </Typography>
              <Typography variant="body1">
                <IconButton
                  href={`tel:${message.contact.groomHost.father.phone}`}
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
                  href={`sms:${message.contact.groomHost.father.phone}`}
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
              <Typography variant="body1">
                {message.contact.groomHost.mother.name}
              </Typography>
              <Typography variant="body1">
                <IconButton
                  href={message.contact.groomHost.mother.phone}
                  aria-label="Call 신랑 어머니"
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
                  href={message.contact.groomHost.mother.phone}
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
            <Typography variant="h6">
              {message.contact.brideHost.title}
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                {message.contact.brideHost.father.name}
              </Typography>
              <Typography variant="body1">
                <IconButton
                  href={`tel:${message.contact.groomHost.father.phone}`}
                  aria-label="Call 신부 아버지"
                  sx={{
                    backgroundColor: '#eaeaea',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#eaeaea',
                    },
                    p: 1,
                    mr: 2,
                  }}
                >
                  <CallIcon />
                </IconButton>
                <IconButton
                  href={`sms:${message.contact.groomHost.father.phone}`}
                  aria-label="Sms 신부 아버지"
                  sx={{
                    backgroundColor: '#eaeaea',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#eaeaea',
                    },
                    p: 1,
                  }}
                >
                  <SmsIcon />
                </IconButton>
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body1">
                {message.contact.brideHost.mother.name}
              </Typography>
              <Typography variant="body1">
                <IconButton
                  href={`tel:${message.contact.groomHost.father.phone}`}
                  aria-label="Call 신부 어머니"
                  sx={{
                    backgroundColor: '#eaeaea',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#eaeaea',
                    },
                    p: 1,
                    mr: 2,
                  }}
                >
                  <CallIcon />
                </IconButton>
                <IconButton
                  href={`sms:${message.contact.groomHost.father.phone}`}
                  aria-label="Sms 신부 어머니"
                  sx={{
                    backgroundColor: '#eaeaea',
                    color: 'white',
                    borderRadius: '50%',
                    '&:hover': {
                      backgroundColor: '#eaeaea',
                    },
                    p: 1,
                  }}
                >
                  <SmsIcon />
                </IconButton>
              </Typography>
              <Typography variant="body2"></Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Contact;
