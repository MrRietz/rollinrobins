import './App.css';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import NavigationDrawer from './components/NavigationDrawer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationDrawer></NavigationDrawer>
      </header>
      <main>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 400,
              height: 400,
            },
          }}
        >
          <Paper>
            <img src={require("./assets/rollin_robins_logo.jpg")} className="App-logo" alt="logo" />
          </Paper>
          <Paper>
            <img src={require("./assets/rollin_robins_logo.jpg")} className="App-logo" alt="logo" />
          </Paper>
          <Paper>
            <img src={require("./assets/rollin_robins_logo.jpg")} className="App-logo" alt="logo" />
          </Paper>
        </Box>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
