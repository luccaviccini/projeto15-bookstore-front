import styled from "styled-components";
import BottomBar from "../components/app-bars/PriceBottomBar";
import BagItem from "../components/items/BagItem";
import TopBar from "../components/app-bars/TopBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../components/context/UserContext";
const API_URL = process.env.REACT_APP_API_URL;

function BagPage() {
	const [bagItems, setBagItems] = useState(null);
	const { token } = useContext(UserContext);

	console.log(token);

	useEffect(() => {
		const request = axios.get(`${API_URL}`, {}, { headers: { token } });
		request.then((response) => setBagItems(response.data));
	}, []);

	return (
		<Page>
			<TopBar title="Bag" />
			{!bagItems
				? "Loading.."
				: bagItems.map((book) => (
						<BagItem
							title={book.title}
							author={book.author}
							image={book.image}
							price={book.price}
						/>
				  ))}

			<BottomBar text="Checkout now" />
		</Page>
	);
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
