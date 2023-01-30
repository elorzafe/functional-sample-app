import './App.css';
import { useState, useEffect } from 'react';
import { Amplify } from '@aws-amplify/core';
import awsconfig from './aws-exports';

import { SignIn } from './SignIn';
import { initUser } from './initUser';
import { Main } from './Main';

Amplify.configure(awsconfig);

function App() {
  const [userToken, setUserToken] = useState();
  useEffect(() => {
    initUser(setUserToken);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {userToken && <Main user={userToken} />}
        {!userToken && <SignIn />}
      </header>
    </div>
  );
}

export default App;
