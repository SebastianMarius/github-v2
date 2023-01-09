import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import UserData from "./components/UserData";
import {useEffect, useState} from "react";

function App() {
    const [user, setUser] = useState();
    const [repos, setRepos] = useState([]);
    const [lang, setLanguage] = useState();

    // console.log(user, repos, ' ceva text')

  return (
      <>
        <Navbar setUser = {setUser} setRepos = {setRepos} repos={repos}  setLanguage={setLanguage} user={user} lang={lang}/>

          {user && repos ?
              <UserData user={user}  setUser = {setUser} repos = {repos}  /> : <> </>
          }
        {/**/}
        {/*<UserData user={user}/>*/}
      </>

  );
}

export default App;
