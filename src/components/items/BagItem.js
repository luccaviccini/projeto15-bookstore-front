import styled from "styled-components";

function BagItem({ title, author, image, price }) {
	return (
		<Item>
			<Image src={image} />
			<InfoBox>
				<Title>{title}</Title>
				<Author>Author: {author}</Author>
				<div className="invisible"></div>
				<Price>${price}</Price>
			</InfoBox>
		</Item>
	);
}

export default BagItem;

const Item = styled.li`
	width: 100%;
	display: flex;
	margin-bottom: 20px;
`;

const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 100%;
	height: 100%;

	.invisible {
		width: 10px;
		height: 5px;
	}
`;

const Image = styled.img`
	width: 80px;
	height: 113px;
	background: #d9d9d9;
	border-radius: 20px;
	margin-right: 20px;
`;

const Title = styled.h4`
	font-family: "Poppins";
	font-style: "medium";
	font-weight: 500;
	font-size: 22px;
	line-height: 22px;
	letter-spacing: -0.408px;
	color: #262626;

	width: 200px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const Author = styled.h5`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 300;
	font-size: 18px;
	line-height: 22px;
	letter-spacing: -0.408px;
	color: #262626;
	margin-top: -10px;
`;

const Price = styled.h3`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 700;
	font-size: 24px;
	line-height: 22px;
	letter-spacing: -0.408px;
	color: #1c1c1c;
`;
