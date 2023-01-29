import { BagPage, CheckoutPage } from "../pages/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserContext from "./context/UserContext";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import LandingPage from "./LandingPage";
import HomePage from "../pages/HomePage";

function App() {
	const [token, setToken] = useState({});
	const [userId, setUserId] = useState({});
	const [session, setSession] = useState({});
	const [total, setTotal] = useState(0.0);

	return (
		<UserContext.Provider
			value={{
				token,
				setToken,
				userId,
				setUserId,
				session,
				setSession,
				total,
				setTotal,
			}}>
			<BrowserRouter>
				<Routes>
					<Route index element={<LandingPage />} />
					<Route path="/sign-up" element={<SignUp />} />
					<Route path="/sign-in" element={<SignIn />} />
					<Route path="/home" element={<HomePage />} />
					<Route path="/my-bag" element={<BagPage />} />
					<Route path="/checkout" element={<CheckoutPage />} />
				</Routes>
			</BrowserRouter>
		</UserContext.Provider>
	);
}

export default App;
