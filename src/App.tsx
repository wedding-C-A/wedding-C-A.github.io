import { Box, Container, Paper } from '@mui/material';
import './App.css';
import Account from './components/Account';
import Contact from './components/Contact';
import Dday from './components/Dday';
import Gallery from './components/Gallery';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Map from './components/Map';
import Sound from './components/Sound';

const App = () => {
  return (
    <Container maxWidth="md">
      <Sound />
      <Box sx={{ width: '100%' }}>
        <Paper
          sx={{
            width: 'auto',
          }}
        >
          <Header />

          <Greeting />

          <Gallery />

          <Dday />

          <Map />

          <Account />

          <Contact />
        </Paper>
      </Box>
    </Container>
  );
};

export default App;
