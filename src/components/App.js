import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BagPage } from "../pages/index";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/my-bag" element={<BagPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
