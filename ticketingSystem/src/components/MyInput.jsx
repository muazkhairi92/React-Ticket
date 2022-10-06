import { Children } from "react"
import { Typography, Box, TextField, InputAdornment } from "@mui/material";



export const MyInput = ({id,name,label,value,onChange,helperText}) => {

    
    return(
        <Box     
        component="form"
        sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off">
        <TextField 
                id={id}
                name={name}
                label={label} 
                value={value}
                onChange={onChange}
                helperText={helperText}
        color="secondary"
  

            />

        {/* <Typography variant={variant}>{text}</Typography> */}
        </Box>
    )
}
