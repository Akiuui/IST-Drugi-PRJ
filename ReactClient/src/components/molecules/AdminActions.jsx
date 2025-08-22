import { Box, Button } from "@mui/material"

function AdminActions({onAdd, onUpdate, onDelete, selectedIds}) {
  
  return (

    <Box display="flex" gap={2}>
        <Button 
            onClick={onAdd} 
            sx={{ flexGrow: 1 }} 
            variant="contained" 
            fullWidth
            >
              Dodaj
        </Button>
          
        <Button 
            onClick={() => onDelete(selectedIds)}
            sx={{ flexGrow: 1 }}
            variant="contained"
            fullWidth
            >
              Ukloni
        </Button>

        <Button
            onClick={() => onUpdate(selectedIds)}
            sx={{ flexGrow: 1 }} 
            variant="contained" 
            fullWidth
            >
              Izmeni
        </Button>
      </Box>

  )
}

export default AdminActions