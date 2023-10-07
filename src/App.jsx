import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';
import Note from './components/Note';

function App({notes}) {

  const padding = {
    padding: 5,
  }

  return (
    <Router>
      <div>
        <Link to="/" style={padding}>home</Link>
        <Link to="/notes" style={padding}>notes</Link>
        <Link to="/users" style={padding}>users</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes notes={ notes } />} />
        <Route path='/users' element={<Users />} />
        <Route path='/notes/:noteid' element={<Note notes={ notes } /> } />
      </Routes>
    </Router>
  )
}

export default App;