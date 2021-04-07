import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import logo from "./../assets/img/logo.png";

const Header = () => (
	<AppBar position="sticky">
		<Toolbar>
			<a href="https://nutritionalapp-food.netlify.app">
				<img src={logo} alt="logo" width="32" height="32" />
				<h1>Nutritional App</h1>
			</a>
		</Toolbar>
	</AppBar>
);

export default Header;
