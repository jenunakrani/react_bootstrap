import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Deleted from '@mui/material/Icon';

function App() {
  const [color,setColor]=useState('primary');
  const[disableBtn,setDisableBtn]=useState(false)

  function customMe()
  {
    setColor('secondary')
    // setDisableBtn(true)

    alert('your work is done')
  }
  return (
    <>
    <Button 
      color={color} 
      disabled={disableBtn}
      variant='outlined'
      onClick={()=>{customMe()}}
      // startIcon={<Deleted/>}
    >click me</Button>
    </>
  );
  
}

export default App;
