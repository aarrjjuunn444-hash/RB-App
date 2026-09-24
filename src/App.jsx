
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Userform from './Pages/Userform'
import Viewresume from './Pages/Viewresume'
import Pnf from './Pages/Pnf'
import Allresumes from './Pages/Allresumes'
import { ToastContainer } from 'react-toastify';
import Downloads from './Pages/Downloads'
import Resumesteps from './Pages/Resumesteps'
import Home from './Pages/Home'

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
