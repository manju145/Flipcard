import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './contex/DataProvider';
import {BrowserRouter} from "react-router-dom";
import Router from './Router/Router';
import Footer from './Components/Footer/Footer';
import PayCard from './Components/Payment/PayCard';
import PaymentMode from './Components/Payment/PaymentMode';
import Success from './Components/Payment/Success';
import Form from './Components/Payment/Form';


function App() {
  return (

    <DataProvider >
<BrowserRouter>

<Navbar></Navbar>
<Box style={{marginTop:54}}>
<Router/>
</Box>
<Footer/>

{/* *************** */}
{/* <PayCard/> */}
{/* <PaymentMode/> */}
{/* <Success></Success> */}
{/* <Form/> */}
{/* *************** */}
</BrowserRouter>
    </DataProvider>
 
  );
}

export default App;