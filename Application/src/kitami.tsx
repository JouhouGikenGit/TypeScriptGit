import { Button, Stack, TextField } from "@mui/material"
import { useState } from "react"

type TypeAdd = {
    inputNum1: string;
    inputNum2: string;
}
const Kitami = (props: TypeAdd) => {
    const [addResult, setAddResult] = useState(0);

    const handleClick = () => {
        setAddResult(parseInt(props.inputNum2) + parseInt(props.inputNum1));
    }    
    return(
        <Stack direction="row" spacing={2}>
            <Button onClick={handleClick}>＋</Button>
            <TextField value={addResult} />
        </Stack>
    )
}