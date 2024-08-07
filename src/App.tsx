import { Box, Container, Paper } from '@mui/material';
import './App.css';
import Account from './components/Account';
import Dday from './components/Dday';
import Gallery from './components/Gallery';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Map from './components/Map';

function App() {
  return (
    <Container maxWidth="md">
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
        </Paper>
      </Box>
    </Container>
  );
}

export default App;
