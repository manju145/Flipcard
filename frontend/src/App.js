import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './contex/DataProvider';
import {BrowserRouter} from "react-router-dom";
import Router from './Router/Router';

function App() {
  return (
    <DataProvider >
<BrowserRouter>

<Navbar></Navbar>
<Box style={{marginTop:54}}>
<Router/>
</Box>

</BrowserRouter>
    </DataProvider>
  );
}

export default App;
