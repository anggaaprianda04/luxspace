import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage.js'


function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' Component={HomePage}/>
      </Routes>
   </BrowserRouter>
  )
}

export default App
