import React, { useContext } from 'react';
import { ProfileContext } from '../App';

// Use the useContext hook to access the profileName state variable and its setter function from the context.

function Profile() {

    const { profileName, setProfileName } = useContext(ProfileContext);

    let onChangeProfileNameHandler = (event) => {
        // console.log(event.target.value);
        setProfileName(event.target.value);
    }

// Render an input field where users can enter their profile name, with its value set to the profileName state variable.

  return (
      <div>
          <h2>Profile Name: { profileName }</h2>
          <input 
              value={profileName}
              onChange={onChangeProfileNameHandler}
          />
    </div>
  )
}

export default Profile;