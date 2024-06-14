import React, { useState } from 'react'
import { TextField, Button, Grid, Box } from '@mui/material'

function App() {
  const [inputA, setInputA] = useState(0);
  const [inputB, setInputB] = useState(0);

  return (
    <>
    
    <Box    
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-start"
        >
      <TextField
        type="number"
        placeholder='数値Aを入力'
        value={inputA || ""}
        onChange={(e) => setInputA(Number(e.target.value))}
        margin="normal"
        style={{ color: "#000000", backgroundColor: "#00ffff" }} 
      />
      <TextField
        type="number"
        placeholder='数値Bを入力'
        value={inputB || ""}
        onChange={(e) => setInputB(Number(e.target.value))}
        margin="normal"
        style={{ color: "#000000", backgroundColor: "#00ffff" }} 
      />
    </Box>
    
    </>  
  );
}

export default App
