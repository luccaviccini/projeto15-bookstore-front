import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './context/UserContext';

import SignUp from "./SignUp";

function App() {
  const [token, setToken] = useState({})
  const [userId, setUserId] = useState({})
  return (
    <UserContext.Provider value={{ token, setToken, userId, setUserId }} >
      <BrowserRouter>
        <Routes>
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App