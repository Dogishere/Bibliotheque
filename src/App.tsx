import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Members from './pages/Members';
import Loans from './pages/Loans';
import Books from './pages/Books';


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}></Route>
      <Route path="/books" element={<Books/>}></Route>
      <Route path="/loans" element={<Loans/>}></Route>
      <Route path="/members" element={<Members/>}></Route>
    </Routes>
    
  )
}

export default App
