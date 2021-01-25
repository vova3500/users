import {useEffect} from "react";
import { useDispatch } from "react-redux";

import {loadingUsers} from "./redux/actions/users"

import Dashboard from "./components/Dasboard/Dashboard"
import Pages from "./components/Pages/Pages";

import './App.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(loadingUsers())
    })

  return (
    <div className="App">
      <Dashboard/>
      <Pages/>
    </div>
  );
}

export default App;
