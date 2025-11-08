import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LayoutChallenge from './pages/LayoutChallenge'
import BugHunt from './pages/BugHunt'

function App() {


  return (
    <Router>
      
      <div className="main-layout flex flex-dir-col justy-center">
        <nav className="navigation" >
       <div className='app-container flex flex-dir-col justy-center align-center'>
            <h1>Junior Frontend Developer Assessment</h1>
          <div className="nav-links">
            <Link to="/" className="nav-link">Challenge 1: Layout Fix</Link>
            <Link to="/bug-hunt" className="nav-link">Challenge 2: Bug Hunt</Link>
          </div>
          </div>
        </nav>
        
        <main className="app-container flex flex-dir-col justy-center align-center">
          <Routes>
            <Route path="/" element={<LayoutChallenge />} />
            <Route path="/bug-hunt" element={<BugHunt />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
