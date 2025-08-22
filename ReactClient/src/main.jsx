import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//Moduls
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Button, createTheme, ThemeProvider } from "@mui/material";
//Models
import RezervacijaModel from "../../Shared/models/RezervacijaModel.js"
import RezervacijaSchema from "../../Shared/schemas/RezervacijaSchema.js";
//COMPONENTS
import NavigationBar from "./components/organisms/NavigationBar.jsx"
//PAGES
import ClientPage from "./components/pages/ClientPage.jsx"
import AdminPage from "./components/pages/AdminPage.jsx";
import DataPage from "./components/pages/DataPage.jsx";

const models = [RezervacijaModel]
const schemas = [RezervacijaSchema]

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#563635"
    },
    secondary:{
      main: "#CFCCD6"
    }
  }
})  

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <ThemeProvider theme={customTheme}>
    <Router>

          <NavigationBar headingText={"Kolekcija Filmova"}>
            <Button variant='contained' color="secondary" component={Link} to="/admin">Admin</Button>
            <Button variant='contained' color="secondary" component={Link} to="/">Client</Button>
          </NavigationBar>
    
          <Routes>
            <Route path='/' element={<ClientPage DataClass={models[0]} schema={schemas[0]}/>}></Route>
            <Route path='/admin' element={<AdminPage DataClass={models[0]} schema={schemas[0]}/>}></Route>
            <Route path='/admin/:id' element={<DataPage DataClass={models[0]} schema={schemas[0]}/>}></Route>
          </Routes>
        
    </Router>
  </ThemeProvider>

  // </StrictMode>,
)
