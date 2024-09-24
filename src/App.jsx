import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './views/About/About.jsx'
import Projects from './views/Projects/Projects.jsx'
import Gallery from './views/Gallery/Gallery.jsx'
import {Routes, Route} from "react-router-dom"
import './app.css'

const App = () => {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/projetos" element={<Projects/>}/>
        <Route path="/galeria" element={<Gallery/>}/>
      </Routes>

      <Footer/>
    </>
  )
}

export default App