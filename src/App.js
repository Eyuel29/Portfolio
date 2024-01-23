import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from "./components/Layouts/Footer";
import Header from './components/Layouts/Header';
import Projects from './components/Pages/Projects';
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import Contact from './components/Pages/Contact';

import { getTheme, initTheme, changeSetting } from "./components/utils/theme";
import "./assets/css/Base.css";

function App() {
    initTheme();
    const [theme, setTheme] = useState(getTheme());

    const changeTheme = () =>{
        if(theme === "dark"){
            setTheme("light");
            changeSetting("light");
        }else if(theme === "light"){
          setTheme("dark");
          changeSetting("dark");
        }
    }

  return (
    <div className={"App " +theme}>
      <Router>
        <Header 
        theme = {theme} 
        themeHandler = {changeTheme} />  

        <div className='container'>
                <Routes>
                  <Route path={'/'} element = {<About />} />
                  <Route path={'/about'} element={<About />} />
                  <Route path={'/projects'} element = {<Projects />}/>
                  <Route path={'skills'} element = {<Skills />}/>
                  <Route path={'contact'} element = {<Contact />}/>
                </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;