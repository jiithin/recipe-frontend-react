import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Item from './pages/Item'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddItem from './pages/AddItem'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Item/>} path='/details/:id' />
      <Route element={<AddItem/>} path='/additem' />
      <Route  />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
