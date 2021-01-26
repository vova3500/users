import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {loadingUsers} from "./redux/actions/users"

import Dashboard from "./components/Dasboard/Dashboard"
import Pages from "./components/Pages/Pages";
import NotFound from "./components/Pages/NotFound/NotFound"

import './App.css';

function App() {
    const dispatch = useDispatch();

    const error = useSelector(({users}) => users.error)

    useEffect(() =>{
        dispatch(loadingUsers())
    })

  return (
    <div className="App">
      <Dashboard/>
        {!error ? <Pages/> : <NotFound/>}
    </div>
  );
}

export default App;
