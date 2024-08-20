import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const AccountContext: React.FC = () => {
  return (
    <Box
      pb={4}
      alignItems="center"
      justifyContent="center"
      sx={{
        whiteSpace: 'pre-wrap',
      }}
    >
      <Typography variant="body1" sx={{ mb: 1 }}>
        참석이 어려워 직접 축하를 전하지 못하는
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        분들을 위해 계좌번호를 기재하였습니다.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        넓은 마음으로 양해 부탁드립니다.
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        전해주시는 진심은 소중하게 간직하여
      </Typography>
      <Typography variant="body1">
        좋은 부부의 모습으로 보답하겠습니다.
      </Typography>
    </Box>
  );
};

const AccountAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleChange = (_: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded);
  };

  const handleCopy = (textToCopy: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(textToCopy).then(
        () => {
          console.log('Copied to clipboard successfully!');
        },
        (err) => {
          console.error('Failed to copy to clipboard:', err);
        },
      );
    } else {
      console.error('Clipboard API not supported');
    }
  };

  return (
    <Accordion expanded={expanded} onChange={handleChange} disableGutters>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography align="center" sx={{ width: '100%' }}>
          신랑측
        </Typography>
      </AccordionSummary>
      <Collapse in={expanded} timeout={500}>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} container alignItems="flex-start">
              <Typography variant="h6">타이틀</Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" spacing={1}>
              <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="flex-start"
              >
                <Typography>국민은행 000000-11-2222222</Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton
                  onClick={() => handleCopy('국민은행 000000-11-2222222')}
                >
                  <FileCopyIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>

        <Divider />

        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} container alignItems="flex-start">
              <Typography variant="h6">타이틀</Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" spacing={1}>
              <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="flex-start"
              >
                <Typography>국민은행 000000-11-2222222</Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton
                  onClick={() => handleCopy('국민은행 000000-11-2222222')}
                >
                  <FileCopyIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>

        <Divider />

        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} container alignItems="flex-start">
              <Typography variant="h6">타이틀</Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" spacing={1}>
              <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="flex-start"
              >
                <Typography>국민은행 000000-11-2222222</Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton
                  onClick={() => handleCopy('국민은행 000000-11-2222222')}
                >
                  <FileCopyIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Collapse>
    </Accordion>
  );
};

const Account: React.FC = () => {
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
        마음을 전하실 곳
      </Typography>
      <Box component="section" sx={{ p: 2 }}>
        <Divider sx={{ mb: 2, borderStyle: 'dashed' }} />

        <Paper sx={{ pt: 2 }}>
          <AccountContext />

          <AccountAccordion />
        </Paper>
      </Box>
    </>
  );
};

export default Account;
