import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import AnyFoodDishes from "./AnyFoodDishes";
import PredefinedFoodDishes from "./PredfinedFoodDishes";
import FoodDishes from "./FoodDishes";
import { getApiUrl } from "./../contants";

const SearchFoodDishes = () => {
	const [hits, setHits] = useState();
	const getData = (query) => {
		query &&
			fetch(getApiUrl(query))
				.then((data) => data.json()) //el body la estructura en json
				.res((res) => setHits(res.hits))
				.catch((err) => console.log(err));
	};
	return (
		<Fragment>
			<div className="root">
				<Grid container spacing={3} justify="center">
					<AnyFoodDishes getData={getData} />
					<PredefinedFoodDishes getData={getData} setHist={setHits} />
				</Grid>
			</div>
			{hits && <FoodDishes hist={hits} />}
			{/* referencia a todos los platos */}
		</Fragment>
	);
};

export default SearchFoodDishes;

//fetch necesita que data necesita procesarla en json
