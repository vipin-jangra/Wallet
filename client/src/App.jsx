
import {BrowserRouter as Router, Routes,Route, Navigate} from 'react-router-dom'
import './stylesheets/alignment.css'
import './stylesheets/text-element.css'
import './App.css'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import  Dashboard from "./pages/Home/Dashboard";
import Trasnfer from './components/Transfer'
import Deposit from './components/Deposit';
import Withdraw from './components/Withdraw';


function App() {
  

  return (
    <>
      <Router>
              <Routes>
              <Route path='/' element={<Navigate to="/login" />} />
              <Route path='/login' exact element={<Login />} />
              <Route path='/Register' exact element={<Register />} />
              <Route path='/Home' exact element={<Dashboard />} />
              <Route path='/Transfer' exact element={<Trasnfer />} />
              <Route path='/Deposit' exact element={<Deposit />} />
              <Route path='/Withdraw' exact element={<Withdraw />} />

              </Routes>
          </Router>
    </>
  )
}

export default App
