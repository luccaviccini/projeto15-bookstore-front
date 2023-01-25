import styled from "styled-components";
import { MdOutlineArrowBackIosNew as BackToLastPageIcon } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function TopBar({ title, link }) {
	const navigate = useNavigate();

	return (
		<StyledNav>
			<BackToLastPageIcon onClick={goToLink} className="icon" />
			<Title>{title}</Title>
			<div className="invisible"></div>
		</StyledNav>
	);

	function goToLink() {
		navigate(link);
	}
}

export default TopBar;

const StyledNav = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 75px;

	.icon {
		font-size: 30px;
	}
`;

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
