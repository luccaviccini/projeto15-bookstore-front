import styled from "styled-components";

function PaymentMethodButton({
	Icon,
	text,
	clicked,
	index,
	setClicked,
	setPaymentMethod,
	dbValue,
}) {
	return (
		<StyledButton clicked={clicked} onClick={changeSelected}>
			{Icon && <Icon className="icon" />}
			<Text clicked={clicked}>{text}</Text>
		</StyledButton>
	);

	function changeSelected(e) {
		setClicked(index);
		setPaymentMethod(dbValue);
	}
}

export default PaymentMethodButton;

const StyledButton = styled.button`
	width: 100%;
	height: 55px;

	background: #e1e1e1;
	border: 1px solid rgba(0, 0, 0, 0.7);
	border-radius: 10px;

	box-sizing: border-box;
	padding: 12px 20px;

	display: flex;
	align-items: center;
	cursor: pointer;
	margin-bottom: 10px;

	${({ clicked }) =>
		clicked &&
		`
		background: #000000;
		color: #fff;

		.icon {
			color: #fff;
		}
	`}

	.icon {
		font-size: 24px;
		margin-right: 15px;
	}
`;

const Text = styled.h3`
	font-family: "Playfair Display";
	font-style: normal;
	font-weight: 700;
	font-size: 17px;
	line-height: 22px;
	text-align: center;
	color: #000000;

	${({ clicked }) => clicked && `color: #fff;`}
`;
