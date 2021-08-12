import React, { useState } from 'react';

import './App.css';

interface IAppOwnProps {
  username: string | undefined;
  userType: 'admin' | 'moderator' | 'user' | 'guest'


}

const App: React.FC<IAppOwnProps> = ({userType,username}): JSX.Element => {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()))

  setInterval(() => {
    setTime(new Date(Date.now()));
  }, 1000);

  return (

    <div className="App">
        <p>
        Hi, {username ? username : 'Myserious Entity' },your user type is {userType ? userType : 'irrelevant because I dont know you'}
        </p> 
        <p>
          {time.toUTCString()}
        </p>
      </div>


  )

}

export default App;
