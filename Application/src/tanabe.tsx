import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";

 type Cal={
    inputA:number,
    inputB:number
}
const CalTanabe:React.FC<Cal> = ({inputA,inputB}) => {
  const [num, setNum] = useState<number>(0);
  const [num1, setNum1] = useState<number>(0);
  const handleCal = () => {
    setNum(inputA * inputB);
  };
  const handleCal1 = () => {
    setNum1(inputA / inputB);
  };

  return (
    <div>
      <Box display="flex" alignItems="center" gap={1}>
        <Button variant="contained"onClick={handleCal}>×</Button>
        <TextField value={num} disabled/>
      </Box>
      <Box display="flex" alignItems="center" gap={1} marginTop={1}>
        <Button variant="contained"onClick={handleCal1}>÷</Button>
        <TextField value={num1} disabled/>
      </Box>
    </div>
  );
};
export default CalTanabe;
