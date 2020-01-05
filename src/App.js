import React from "react";
import { Route, Link } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage.component";
import "./App.scss";

function App() {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
		</div>
	);
}

export default App;
