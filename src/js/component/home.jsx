import React from "react";
import NavBar from "./navbar.jsx";
import Welcome from "./welcome.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar>
				Probando
			</NavBar>
			<Welcome>

			</Welcome>
			<Card>

			</Card>
			<Footer>

			</Footer>
		</div>
	);
};

export default Home;
