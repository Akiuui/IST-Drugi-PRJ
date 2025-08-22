import React from 'react'
import { AppBar, Toolbar, Typography } from "@mui/material"


function NavigationBar({headingText, children}) {

  return (

    <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                {headingText}
            </Typography>
            {children}
        </Toolbar>
    </AppBar>      

  )
}

export default NavigationBar