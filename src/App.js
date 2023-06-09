import React, { useState } from 'react';
import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UserList';

function App(props) {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddUser onAdduser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
