import styled from "styled-components";
import BottomBar from "../components/app-bars/PriceBottomBar";
import BagItem from "../components/items/BagItem";
import TopBar from "../components/app-bars/TopBar";
import { useContext, useEffect, useState } from "react";
import UserContext from "../components/context/UserContext";
import { apiServices } from "../services/apiServices";
import { BallTriangle as LoadingAnimation } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

function BagPage() {
	const [bagItems, setBagItems] = useState(null);
	const { token } = useContext(UserContext);
	const { total, setTotal } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		const request = apiServices.getMyBag(token);
		request.then((response) => setBagItems(response.data));
		request.catch((err) => console.log(err));
	}, []);

	setTotal(getTotal());

	if (!bagItems)
		return (
			<Page>
				<TopBar title="Bag" link="/home" />
				<LoadingAnimation
					height={70}
					width={70}
					radius={5}
					color="#000"
					ariaLabel="ball-triangle-loading"
					wrapperStyle=""
					visible={true}
				/>
			</Page>
		);

	if (bagItems.length === 0)
		return (
			<Page>
				<TopBar title="Bag" link="/home" />
				<InfoBox>
					<NoItemsText>You haven't added any items!</NoItemsText>
				</InfoBox>
			</Page>
		);

	return (
		<Page>
			<TopBar title="Bag" link="/home" />
			{bagItems.map((book) => (
				<BagItem
					key={book._id}
					title={book.title}
					author={book.author}
					image={book.imageURL}
					price={book.price}
				/>
			))}
			<BottomBar
				text="Checkout now"
				total={total}
				handleClick={handleClick}
			/>
		</Page>
	);

	function getTotal() {
		if (!bagItems) return 0.0;
		const pricesArr = bagItems.map((book) => Number(book.price));
		return pricesArr.reduce((partialSum, a) => partialSum + a, 0);
	}

	function handleClick() {
		navigate("/checkout");
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

const InfoBox = styled.div`
	width: 100%;
	height: 55px;
	left: 40px;
	top: 200px;
	background: #e1e1e1;
	border-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const NoItemsText = styled.h3`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #000000;
`;
