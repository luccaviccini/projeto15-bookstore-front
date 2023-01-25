import styled from "styled-components";
import BottomBar from "../components/BottomBar";
import BagItem from "../components/items/BagItem";
import TopBar from "../components/TopBar";

function BagPage() {
	const bookMock = {
		title: "The Chronicles of Narnia",
		author: "C.S. Lewis",
		image: "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Chronicles_of_Narnia_box_set_cover.jpg",
		price: 48.29,
	};

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

			<BottomBar />
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

	display: flex;
	flex-direction: column;
	align-items: center;
`;
