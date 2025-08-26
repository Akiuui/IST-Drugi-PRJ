import { useState } from "react"
import {Link} from "react-router-dom"
import {Button, Menu, MenuItem } from "@mui/material"

function DropDownMenu({setHeadingText, btnName, items}) {

    const [anchorEl, setAnchorEl] = useState(null)

    const open = Boolean(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (text) => {
        setHeadingText(text);
        handleClose();
    };

    return(
        <>
            <Button
                aria-controls={open ? 'admin-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained"
                color="secondary"
            >
                {btnName}
            </Button>
      
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >

                {items.map((item) => (
                    <MenuItem
                        key={item.path}
                        onClick={() => handleMenuItemClick(`${btnName} ${item.text}`)}
                        component={Link}
                        to={item.path}
                    >
                        {item.text}
                    </MenuItem>
                ))}

            </Menu>
        
        </>
    )

}

export default DropDownMenu