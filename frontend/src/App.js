// import logo from './logo.svg';
// import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">

<Navbar></Navbar>
<Box style={{marginTop:54}}>
<Home></Home>
</Box>

    </div>
  );
}

export default App;
