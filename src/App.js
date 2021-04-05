import React, { Fragment } from "react";
import Header from "./components/Header";
import SearchFooDishes from "./components/SearchFoodDishes";
import Footer from "./components/Footer";

const App = () => (
	<Fragment>
		<Header />
		<SearchFooDishes />
		<Footer />
	</Fragment>
);

export default App;
