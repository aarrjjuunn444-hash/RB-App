import './App.css'
import Header from './Components/Header.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Resumesteps from './pages/Resumesteps.jsx'
import Userform from './pages/Userform.jsx'
import Downloads from './pages/Downloads.jsx'
import Allresumes from './Pages/Allresumes.jsx'
import Footer from './Components/Footer.jsx'
import { ToastContainer } from 'react-toastify'
import Viewresume from './Pages/Viewresume.jsx'
import Pnf from './pages/pnf.jsx'

function App() {
  

  return (
    <>
     <Header/>
     {/* path setup  */}
     <Routes>
      <Route path='' element={<Home/>}/>
      <Route path='/steps' element={<Resumesteps/>}/>
      <Route path='/form' element={<Userform/>}/>
      <Route path='/downloads' element={<Downloads/>}/>
      <Route path='/view/:id' element={<Viewresume/>}/>
      <Route path='/all-resumes' element={<Allresumes/>}/>
{/* invalid path */}
      <Route path='/*' element={<Pnf/>}/>

     </Routes>
     <Footer/>
     <ToastContainer position="top-center"autoClose={3000}theme="colored"/>
    </>
  )
}

export default App
