import { Button, TextField, Box } from "@mui/material";
import React, { useState } from "react";

const calTanabe:React.FC = () => {
  const [num, setNum] = useState(0);
  const [num1, setNum1] = useState(0);
  const handleCal = ({inputA, inputB}) => {
    setNum(inputA * inputB);
  };
  const handleCal1 = ({inputA, inputB}) => {
    setNum1(inputA / inputB);
  };

  return (
    <div>
      <Box display="flex" alignItems="center" gap={1}>
        <Button onClick={handleCal}>×</Button>
        <TextField value={num} disabled/>
      </Box>
      <Box display="flex" alignItems="center" gap={1} marginTop={1}>
        <Button onClick={handleCal1}>÷</Button>
        <TextField value={num1} disabled/>
      </Box>
    </div>
  );
};
export default calTanabe;
