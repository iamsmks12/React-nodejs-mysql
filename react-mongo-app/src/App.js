import React, { useState } from 'react';
import Login from './Login';
import UserData from './UserData';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      {!user ? (
        <Login setUser={setUser} />
      ) : (
        <div>
          <UserData />
        </div>
      )}
    </div>
  );
};

export default App;
