const base_url = "https://api.edaman.com/search";
const api_id = "eafe61fb";
const api_key = "6ef46546e1ffd4d0697f313d25da7aa7";

export const getApiUrl = (query) =>
	`${base_url}?q=${query}&app_id=${api_id}&app_key=${api_key}`;

//6ef46546e1ffd4d0697f313d25da7aa7

//eafe61fb
export const predefinedFoodDishes = [
	{ _id: 1, title: "Eggs", selected: false },
	{ _id: 2, title: "Chicken", selected: false },
	{ _id: 3, title: "Milk", selected: false },
	{ _id: 4, title: "Coffee", selected: false },
	{ _id: 5, title: "Banana", selected: false },
	{ _id: 6, title: "Burger", selected: false },
	{ _id: 7, title: "Ramen", selected: false },
	{ _id: 8, title: "Curry", selected: false },
	{ _id: 9, title: "Sushi", selected: false },
	{ _id: 1, title: "Lasagna", selected: false },
];

export const anyFoodDishes = [
	{ _id: 1, title: "Vegan" },
	{ _id: 2, title: "Chips" },
	{ _id: 3, title: "Cookies" },
	{ _id: 4, title: "Apple" },
	{ _id: 5, title: "Potato" },
	{ _id: 6, title: "Tomato" },
	{ _id: 7, title: "Cheese" },
	{ _id: 8, title: "Meat" },
	{ _id: 9, title: "Oat" },
	{ _id: 10, title: "Lentils" },
];
