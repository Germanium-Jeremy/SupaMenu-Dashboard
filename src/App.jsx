import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Missing from './pages/Missing'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import AddClient from './pages/AddClient'
import RestRegister from './pages/RestRegister'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Landing/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/signup' exact element={<Signup/>}/>
          <Route path='/dashboard/*' exact element={<Dashboard/>}/>
          <Route path='/addClient' exact element={<AddClient/>}/>
          <Route path='/restaurant' exact element={<RestRegister/>}/>
          <Route path='*' element={<Missing/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
