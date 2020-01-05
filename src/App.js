import React from "react";
import { Route, Link } from "react-router-dom";

import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

import "./App.scss";

function App() {
	return (
		<div>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/shop" component={ShopPage} />
		</div>
	);
}

export default App;
