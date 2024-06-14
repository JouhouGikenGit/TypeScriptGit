import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"

export type TypeAdd = {
    inputNum1: number;
    inputNum2: number;
}
export const Kitami = (props: TypeAdd) => {
    const [addResult, setAddResult] = useState(0);

    const handleClick = () => {
        setAddResult(props.inputNum1 + props.inputNum2);
    }    
    return(
        <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleClick} >＋</Button>
            <TextField label="足し算の結果が表示されます" disabled value={addResult} />
        </Stack>
    )
}