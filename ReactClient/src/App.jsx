import {useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Button, createTheme, ThemeProvider } from "@mui/material";
//Models
import entityMap from '../../Shared/entityMap.js';
//COMPONENTS
import NavigationBar from "./components/organisms/NavigationBar.jsx"

import DropDownMenu from './components/atoms/DropDownMenu.jsx';
//PAGES
import ClientPage from "./components/pages/ClientPage.jsx"
import AdminPage from "./components/pages/AdminPage.jsx";
import DataPage from "./components/pages/DataPage.jsx";

function App() {

    const [headingText, setHeadingText] = useState(":");

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

    const adminLinks = [
      { text: 'Rezervacija', path: '/admin/rezervacija' },
      { text: 'Vozilo', path: '/admin/vozilo' },
      { text: 'Zakupac', path: '/admin/zakupac' },
    ];
    
    return <>
        <ThemeProvider theme={customTheme}>
        <Router>

            <NavigationBar headingText={headingText}>

              <Button variant='contained' color="secondary" onClick={() => {setHeadingText("Client")}} component={Link} to="/">Client</Button>
              <DropDownMenu setHeadingText={setHeadingText} btnName={"Admin"} items={adminLinks}/>
                {/* <Button variant='contained' color="secondary" onClick={() => {setHeadingText("Admin Vozilo")}} component={Link} to="/admin/vozilo">Vozilo</Button> */}
                {/* <Button variant='contained' color="secondary" onClick={() => {setHeadingText("Admin Zakupac")}} component={Link} to="/admin/zakupac">Zakupac</Button> */}
            </NavigationBar>
        
            <Routes>
                <Route path='/' element={<ClientPage Class={entityMap["rezervacija"]}/>}></Route>

                <Route path='/admin/rezervacija' element={<AdminPage key={"rezervacija"} Class={entityMap["rezervacija"]}/>}></Route>
                <Route path='/admin/vozilo' element={<AdminPage key={"vozilo"} Class={entityMap["vozilo"]}/>}></Route>
                <Route path='/admin/zakupac' element={<AdminPage key={"zakupac"} Class={entityMap["zakupac"]}/>}></Route>

                <Route path='/admin/rezervacija/:id' element={<DataPage key={"rezervacija-data"} Class={entityMap["rezervacija"]}/>}></Route>
                <Route path='/admin/vozilo/:id' element={<DataPage key={"vozilo-data"} Class={entityMap["vozilo"]}/>}></Route>
                <Route path='/admin/zakupac/:id' element={<DataPage key={"zakupac-data"} Class={entityMap["zakupac"]}/>}></Route>
            </Routes>
            
        </Router>
    </ThemeProvider>
  </>
}

export default App