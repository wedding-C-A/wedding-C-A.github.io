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
import useLanguage from '../hooks/useLanguage';

const AccountContext: React.FC = () => {
  const message = useLanguage();

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
        {message.account.body.cont1}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {message.account.body.cont2}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {message.account.body.cont3}
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        {message.account.body.cont4}
      </Typography>
      <Typography variant="body1">{message.account.body.cont5}</Typography>
    </Box>
  );
};

const AccountAccordion: React.FC = () => {
  const message = useLanguage();

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
          {message.account.groom.title}
        </Typography>
      </AccordionSummary>
      <Collapse in={expanded} timeout={500}>
        <AccordionDetails>
          <Grid container spacing={2}>
            <Grid item xs={12} container alignItems="flex-start">
              <Box sx={{ mr: 1 }}>
                <Typography variant="h6">
                  {message.account.groom.person1.info}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {message.account.groom.person1.name}
              </Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" spacing={1}>
              <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="flex-start"
              >
                <Typography>{message.account.groom.person1.acc}</Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton
                  onClick={() => handleCopy(message.account.groom.person1.acc)}
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
              <Box sx={{ mr: 1 }}>
                <Typography variant="h6">
                  {message.account.groom.person2.info}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {message.account.groom.person2.name}
              </Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" spacing={1}>
              <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="flex-start"
              >
                <Typography>{message.account.groom.person2.acc}</Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton
                  onClick={() => handleCopy(message.account.groom.person2.acc)}
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
              <Box sx={{ mr: 1 }}>
                <Typography variant="h6">
                  {message.account.groom.person3.info}
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {message.account.groom.person3.name}
              </Typography>
            </Grid>
            <Grid item xs={12} container alignItems="center" spacing={1}>
              <Grid
                item
                xs={10}
                container
                direction="row"
                alignItems="flex-start"
              >
                <Typography>{message.account.groom.person3.acc}</Typography>
              </Grid>
              <Grid item xs={2} container justifyContent="flex-end">
                <IconButton
                  onClick={() => handleCopy(message.account.groom.person3.acc)}
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
