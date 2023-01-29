import styled from "styled-components";
import BottomBar from "../components/app-bars/PriceBottomBar";
import BagItem from "../components/items/BagItem";
import TopBar from "../components/app-bars/TopBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../components/context/UserContext";
import { apiServices } from "../services/apiServices";

function BagPage() {
	const [bagItems, setBagItems] = useState(null);
	const { token } = useContext(UserContext);

	useEffect(() => {
		const request = apiServices.getMyBag(token);
		request.then((response) => setBagItems(response.data));
		request.catch((err) => console.log(err));
	}, []);

	const total = getTotal();

	return (
		<Page>
			<TopBar title="Bag" link="/home" />
			{!bagItems
				? "Loading.."
				: bagItems.map((book) => (
						<BagItem
							key={book._id}
							title={book.title}
							author={book.author}
							image={book.imageURL}
							price={book.price}
						/>
				  ))}

			<BottomBar text="Checkout now" total={total} />
		</Page>
	);

	function getTotal() {
		if (!bagItems) return 0.0;
		const pricesArr = bagItems.map((book) => Number(book.price));
		return pricesArr.reduce((partialSum, a) => partialSum + a, 0);
	}
}

export default BagPage;

const Page = styled.div`
	background-color: EFEFEF;
	box-sizing: border-box;
	padding: 25px 40px 0 40px;

	width: 100vw;
	height: 100vh;
	margin-bottom: 240px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;
