import { TextField, Button, Box } from "@mui/material"
import React, { useState } from "react"

type Cal = {
    inputA:number,
    inputB:number
}

const CalTakazawa:React.FC<Cal> = ({inputA,inputB}) => {
const [num, setNum] = useState<number>(0);
const [err, setErr] = useState<string>("");

const hundleMinusClick = () => {
    
    if(inputA == 0 || inputB == 0){
        setErr("NaN");
        setNum(0);
        
    }else if(inputA == 0 && inputB == 0){
        setErr("NaN");
    }else{
        setNum(inputA - inputB);
    }
};
return(
    <div>
        <Box display="flex" alignItems="center" gap={3}>
        <Button variant="contained" style={{marginTop:"20px"}} onClick={hundleMinusClick}>-</Button>
        <TextField value={num || err} style={{marginTop:"20px"}} label="引き算の結果が表示されます" disabled/>
        </Box>
        </div>
      );
    };
export default CalTakazawa;