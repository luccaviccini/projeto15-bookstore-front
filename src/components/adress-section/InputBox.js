import styled from "styled-components";

function InputBox({ id, type, text, value, setValue }) {
	return (
		<Box>
			<StyledInput id={id} type={type} onChange={updateValue} required />
			<StyledLabel htmlFor={id}>{text}</StyledLabel>
		</Box>
	);

	function updateValue(e) {
		setValue(e.target.value);
	}
}

export default InputBox;

const Box = styled.div`
	position: relative;
	margin-bottom: 15px;

	input:focus + label {
		top: 2px;
		font-size: 12px;
	}
	input:valid + label {
		top: 2px;
		font-size: 12px;
	}
`;

const StyledLabel = styled.label`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	text-transform: capitalize;

	color: #000000;
	position: absolute;
	top: 5px;
	left: 17px;
`;

const StyledInput = styled.input`
	width: 100%;
	height: 47px;
	background: #e1e1e1;
	border-radius: 10px;
	border: none;

	box-sizing: border-box;
	padding-left: 17px;
	padding-top: 17px;

	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 17px;
	line-height: 22px;
`;
