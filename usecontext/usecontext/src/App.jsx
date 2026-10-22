import React, {createContext, useContext} from 'react';
const UserContext=createContext();
function App(){
  const username='abcd';
  return(
    <UserContext.Provider value={username}>
      <h1>useContext Example</h1>
      <Profile/>
    </UserContext.Provider>
  );
}
function Profile(){
  return <Dashboard/>;
}
function Dashboard(){
  return <User/>;
}
function User(){
  const username=useContext(UserContext);
  return <h2>Welcome, {username}!</h2>;
}
export default App;