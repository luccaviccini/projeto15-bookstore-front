import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import UserContext from './context/UserContext';


function App() {
  const [token, setToken] = useState({})
  const [userId, setUserId] = useState({})
  return (
    <UserContext.Provider value={{ token, setToken, userId, setUserId }} >
      <BrowserRouter>
        <Routes>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App