import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/my-bag" />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
