import { BagPage } from "../pages/index";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './context/UserContext';
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function App() {
  const [token, setToken] = useState({})
  const [userId, setUserId] = useState({})
  const [session, setSession] = useState({})
  
  return (
    <UserContext.Provider value={{ token, setToken, userId, setUserId, session, setSession }} >
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/my-bag" element={<BagPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App;
