import styled from "styled-components";
import BottomBar from "../components/app-bars/PriceBottomBar";
import BagItem from "../components/items/BagItem";
import TopBar from "../components/app-bars/TopBar";
import { useEffect, useState } from "react";
import axios from "axios";

function BagPage() {
	const bagItems = useState(null);

	useEffect(() => {
		axios.get();
	}, []);

	return (
		<Page>
			<TopBar title="Bag" />
			<BagItem
				title={bookMock.title}
				author={bookMock.author}
				image={bookMock.image}
				price={bookMock.price}
			/>
			<BagItem
				title={bookMock.title}
				author={bookMock.author}
				image={bookMock.image}
				price={bookMock.price}
			/>
			<BagItem
				title={bookMock.title}
				author={bookMock.author}
				image={bookMock.image}
				price={bookMock.price}
			/>

			<BagItem
				title={bookMock.title}
				author={bookMock.author}
				image={bookMock.image}
				price={bookMock.price}
			/>
			<BagItem
				title={bookMock.title}
				author={bookMock.author}
				image={bookMock.image}
				price={bookMock.price}
			/>

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
