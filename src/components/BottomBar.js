import styled from "styled-components";

function BottomBar() {
	return <StyledBar></StyledBar>;
}

export default BottomBar;

const StyledBar = styled.nav`
	box-sizing: border-box;
	padding: 20px 40px;

	width: 430px;
	height: 126px;
	background-color: #fff;
`;
