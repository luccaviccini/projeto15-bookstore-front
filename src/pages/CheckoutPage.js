import styled from "styled-components";
import TopBar from "../components/TopBar";

function CheckoutPage() {
	return (
		<Page>
			<TopBar title="Checkout" />
		</Page>
	);
}

export default CheckoutPage;

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
