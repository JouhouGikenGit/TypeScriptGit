import React, { useState } from 'react';
import { TextField, Button, Grid, Box } from '@mui/material';
import CalTanabe from './tanabe.tsx';
import CalTakazawa from './takazawa.tsx';
import { Kitami } from './kitami.tsx';


function App() {
  const [inputA, setInputA] = useState<number>(0);
  const [inputB, setInputB] = useState<number>(0);

  return (
    <><Grid container spacing={2}>
      <Grid item lg={6}>
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
      </Grid>
      <Grid item lg={6}>
      <Kitami inputNum1={inputA} inputNum2={inputB} />
      <CalTakazawa inputA={inputA} inputB={inputB}  />
      <CalTanabe inputA={inputA} inputB={inputB} />
      </Grid></Grid>
    </>  
  );
}

export default App;
