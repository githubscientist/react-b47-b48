import React, { createContext, useState } from 'react';
import Profile from './components/Profile';

// create a context object using the createContext function from the React
const ProfileContext = createContext();

function App() {

  // Define a state variable called profileName using the useState hook and set its value to an empty string
  const [profileName, setProfileName] = useState('');

  // Wrap the Profile component with the context provider component, passing the profileName state and its corresponding setter function as the value prop.

  return (
    <div>
      <ProfileContext.Provider value={{profileName, setProfileName}}>
        <Profile />
      </ProfileContext.Provider>
    </div>
  )
}

export {
  App as default,
  ProfileContext
};