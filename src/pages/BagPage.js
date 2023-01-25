import styled from "styled-components";
import TopBar from "../components/TopBar";

function BagPage() {
	return (
		<Page>
			<TopBar title="Bag" />
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
`;
