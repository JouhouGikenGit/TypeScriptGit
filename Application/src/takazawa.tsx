import { TextField, Button, Box } from "@mui/material"
import React, { useState } from "react"

type Cal = {
    inputA:number,
    inputB:number
}

const CalTakazawa:React.FC<Cal> = ({inputA,inputB}) => {
const [num, setNum] = useState<number>(0);

const hundleMinusClick = () => {
    setNum(inputA - inputB);
};

return(
    <div>
        <Box display="flex" alignItems="center" gap={3}>
        <Button variant="contained" style={{marginTop:"20px"}} onClick={hundleMinusClick}>-</Button>
        <TextField value={num} style={{marginTop:"20px"}} disabled/>
        </Box>
        </div>
      );
    };
export default CalTakazawa;