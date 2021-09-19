import React, { useState } from 'react'
import NavBar from './Components/assets/NavBar'
import { Route, Switch } from 'react-router-dom'
import AdminLoginForm from "./Components/Forms/AdminLoginForm"
import AdminSignUpForm from "./Components/Forms/AdminSignUpForm"
import UserSignUpForm from "./Components/Forms/UserSignUpForm"
import UserLoginForm from "./Components/Forms/UserLoginForm"
import Alert from './Components/Alert'
import DashBorad from "./Components/assets/DashBorad"
import Profile from './Components/DashBoards/Profile'

const App = () => {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const [visible, setVisible] = useState("password");

  const handleVisiblity = () => {
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  }

  const ToggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white"
      setMode("light")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      message,
      type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  return (
    <>
      <Switch>
      <Route exact path="/">
      <NavBar mode={mode} ToggleMode={ToggleMode} />
      </Route>
        <Route exact path="/admin/login" >
        <NavBar mode={mode} ToggleMode={ToggleMode} />
          <Alert alert={alert} />
          <AdminLoginForm mode={mode} showAlert={showAlert} visible={visible} handleVisiblity={handleVisiblity} />
        </Route>
        <Route exact path="/admin/signup" >
        <NavBar mode={mode} ToggleMode={ToggleMode} />
          <Alert alert={alert} />
          <AdminSignUpForm mode={mode} showAlert={showAlert} visible={visible} handleVisiblity={handleVisiblity} />
        </Route>
        <Route exact path="/user/login">
        <NavBar mode={mode} ToggleMode={ToggleMode} />
          <Alert alert={alert} />
          <UserLoginForm mode={mode} showAlert={showAlert} visible={visible} handleVisiblity={handleVisiblity} />
        </Route>
        <Route exact path="/user/signup" >
        <NavBar mode={mode} ToggleMode={ToggleMode} />
          <Alert alert={alert} />
          <UserSignUpForm mode={mode} showAlert={showAlert} visible={visible} handleVisiblity={handleVisiblity} />
        </Route>
        <Route exact path="/admin/dashboard" >
          <DashBorad mode={mode} ToggleMode={ToggleMode}/>
        </Route>
        <Route exact path="/user/dashboard" >
          <DashBorad mode={mode} ToggleMode={ToggleMode}/>
        </Route>
        <Route exact path="/dashboard/profile" >
          <Profile mode={mode} ToggleMode={ToggleMode}/>
        </Route>
      </Switch>
    </>
  )
}

export default App;
