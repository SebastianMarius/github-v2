import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import UserData from "./components/UserData";
import {useState} from "react";

function App() {
    const [user, setUser] = useState();
    const [repos, setRepos] = useState();


  return (
      <>
        <Navbar user={user} setUser={setUser} setRepos={setRepos} />

          {user && repos ?
              <UserData user={user} setUser={setUser} repos={repos} /> : <> </>
          }

        {/*<UserData user={user}/>*/}
      </>

  );
}

export default App;
