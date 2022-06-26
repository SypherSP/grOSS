import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchPage from "./components/pages/SearchPage";
import Genuine from "./components/pages/searches/Genuine";
import SecurityResult from "./components/pages/searches/SecurityResult";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='search' element={<SearchPage />}>
					<Route path='genuine' element={<Genuine />} />
					<Route path='securityresult' element={<SecurityResult />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	);
}
export const NotFound = () => {
	return <div>This is a 404 page</div>;
};

export default App;
