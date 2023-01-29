import styled from "styled-components";
import { MdOutlineDoneOutline as CompleteIcon } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function SucessPage() {
	const navigate = useNavigate();

	return (
		<Page>
			<CompleteIcon className="icon" />
			<SuccessText>Purchase completed successfully!</SuccessText>
			<SuccessText className="link" onClick={goToHome}>
				Go back
			</SuccessText>
		</Page>
	);

	function goToHome() {
		navigate("/home");
	}
}

export default SucessPage;

const Page = styled.div`
	background-color: rgb(5, 129, 36);
	box-sizing: border-box;
	padding: 25px 40px 0 40px;

	width: 100vw;
	height: 100vh;
	margin-bottom: 240px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.icon {
		color: #fff;
		font-size: 60px;
		margin-bottom: 40px;
	}

	.link {
		margin-top: 40px;
		font-size: 20px;
	}
`;

const SuccessText = styled.h1`
	font-family: "Playfair Display";
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #fff;
`;
