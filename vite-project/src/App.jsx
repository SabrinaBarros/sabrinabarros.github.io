import Header from './components/Header/Header.jsx'
import About from './views/About/About.jsx'
import Projects from './views/Projects/Projects.jsx'
import {Routes, Route} from "react-router-dom"
import './app.css'

const App = () => {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/projetos" element={<Projects/>}/>
      </Routes>

    </>
  )
}

export default App