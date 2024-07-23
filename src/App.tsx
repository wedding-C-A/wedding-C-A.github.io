import { Box, Container, Paper } from '@mui/material';
import './App.css';
import Account from './components/Account';
import Dday from './components/Dday';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Map from './components/Map';
import Name from './components/Name';

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

          <Name />

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
