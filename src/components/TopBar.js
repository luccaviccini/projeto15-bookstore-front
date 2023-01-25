import styled from "styled-components";

function TopBar({ title }) {
	return (
		<StyledNav>
			<Title>{title}</Title>
		</StyledNav>
	);
}

export default TopBar;

const StyledNav = styled.nav``;

const Title = styled.h1`
	font-family: "Playfair Display";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #000000;
`;
