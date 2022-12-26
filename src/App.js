import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import UserData from "./components/UserData";
import {useState} from "react";

function App() {
    const [user, setUser] = useState();


  return (
      <>
        <Navbar user={user} setUser={setUser} />

          {user ?
              <UserData user={user} setUser={setUser}/> : <> </>
          }

        {/*<UserData user={user}/>*/}
      </>

  );
}

export default App;
