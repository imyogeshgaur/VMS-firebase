import React, { useState } from 'react'
import NavBar from './Components/assets/NavBar'
import { Route, Switch } from 'react-router-dom'
import AdminLoginForm from "./Components/Forms/AdminLoginForm"
import AdminSignUpForm from "./Components/Forms/AdminSignUpForm"
import UserSignUpForm from "./Components/Forms/UserSignUpForm"
import UserLoginForm from "./Components/Forms/UserLoginForm"
import Alert from './Components/Alert'
import AdminProfile from './Components/Screens/AdminProfile'
import UserDashBoard from './Components/assets/UserDashboard'
import AdminDashBoard from './Components/assets/AdminDashboard'
import UserProfile from './Components/Screens/UserProfile'
import AdminSupport from './Components/Screens/AdminSupport'
import UserSupport from './Components/Screens/UserSupport'
import UserDetails from './Components/Screens/UserDetails'


const App = () => {

//Common States

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null);
  const [visible, setVisible] = useState("password");

// Function  To Handle Visiblity of Password in every component 

  const handleVisiblity = () => {
    if (visible === "password") {
      setVisible("text");
    } else {
      setVisible("password");
    }
  }

  // Function  To Switch between dark and light theme in every component 

  const ToggleMode = () => {
    if (mode === "light") {
      document.body.style.backgroundColor = "black";
      setMode("dark")
    } else {
      document.body.style.backgroundColor = "white"
      setMode("light")
    }
  }

// Function  To Show Alert in every component 

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

        {/* Admin Routes */}   

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
        <Route exact path="/admin/dashboard/" >
          <AdminDashBoard mode={mode} ToggleMode={ToggleMode} />
        </Route>
        <Route exact path="/admin/dashboard/adminprofile" >
          <AdminProfile mode={mode} ToggleMode={ToggleMode} />
        </Route>
        <Route exact path="/admin/dashboard/userdetails" >
          <UserDetails mode={mode} ToggleMode={ToggleMode} />
        </Route>
        <Route exact path="/admin/dashboard/adminsupport" >
          <AdminSupport mode={mode} ToggleMode={ToggleMode} />
        </Route>

        {/* User Routes */}

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
        <Route exact path="/user/dashboard" >
          <UserDashBoard mode={mode} ToggleMode={ToggleMode} />
        </Route>
        <Route exact path="/user/dashboard/userprofile" >
          <UserProfile mode={mode} ToggleMode={ToggleMode} />
        </Route>
        <Route exact path="/user/dashboard/usersupport" >
          <UserSupport mode={mode} ToggleMode={ToggleMode} />
        </Route>
      </Switch>
    </>
  )
}

export default App;
