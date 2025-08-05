import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useEffect, useState } from 'react'
import UserContext from './utils/UserContext'
import { Provider } from "react-redux";
import appStore from './utils/appStore'


function App() {
  const [userName, setUserName] = useState();
  // authentication logic 
  useEffect(() => {
    // Make an API call and send usernamw and password
    const data = {
      name: "John Doe",
    };
    setUserName(data.name)
  }, []);

  return (
    <>
    <Provider store={appStore} >
    <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
    </Provider>
    </>
  )
}

export default App
