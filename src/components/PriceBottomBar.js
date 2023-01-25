import styled from "styled-components";

function PriceBottomBar({ total, text, link }) {
	return (
		<StyledBar>
			<TotalPrice>
				<p>Total: </p>
				<p>${total || "0.00"}</p>
			</TotalPrice>
			<StyledButton>{text}</StyledButton>
		</StyledBar>
	);
}

export default PriceBottomBar;

const StyledBar = styled.nav`
	box-sizing: border-box;
	padding: 20px 40px;

	width: 100vw;
	height: 120px;
	background-color: #fff;
	box-shadow: 0px -10px 10px rgba(0, 0, 0, 0.15);

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	position: fixed;
	bottom: 0;
	left: 0;
`;

const TotalPrice = styled.div`
	display: flex;
	justify-content: space-between;
	p {
		font-family: "Poppins";
		font-style: normal;
		font-weight: 700;
		font-size: 24px;
		line-height: 22px;
		letter-spacing: -0.408px;
		color: #1c1c1c;
	}
`;

const StyledButton = styled.button`
	width: 100%;
	height: 45px;

	background: #000000;
	border: 1px solid #545454;
	border-radius: 10px;

	display: flex;
	justify-content: center;
	align-items: center;

	font-family: "Poppins";
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;

	color: #fbfbfb;
	cursor: pointer;
`;
