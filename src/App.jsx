import React, { useState } from 'react';
import Home from './components/Home';
import Notes from './components/Notes';
import Users from './components/Users';

function App() {

  const [page, setPage] = useState('home');

  const toPage = (page) => (event) => {
    event.preventDefault();
    setPage(page);
  }

  const padding = {
    padding: 5
  }

  const content = () => {
    if (page === 'home') {
      return <Home />
    } else if (page === 'notes') {
      return <Notes />
    } else if (page === 'users') {
      return <Users />
    }
  }

  return (
    <div>
      <div>
        <a href='' onClick={toPage('home')} style={padding}>home</a>
        <a href='' onClick={toPage('notes')} style={padding}>notes</a>
        <a href='' onClick={toPage('users')} style={padding}>users</a>
      </div>

      {content()}
    </div>
  )
}

export default App;