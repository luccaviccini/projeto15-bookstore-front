import AdressSumary from "./AdressSummary";
import { useState } from "react";
import styled from "styled-components";

function AdressSection() {
	const [editAdress, setEditAdress] = useState(false);

	if (!editAdress)
		return (
			<StyledSection>
				<AdressSumary setEditAdress={setEditAdress} />
			</StyledSection>
		);

	return (
		<StyledSection>
			<InputBox>
				<StyledInput id="name" type="text" required />
				<StyledLabel htmlFor="name">Name</StyledLabel>
			</InputBox>

			<InputBox>
				<StyledInput id="phoneNumber" type="text" required />
				<StyledLabel htmlFor="phoneNumber">Phone Number</StyledLabel>
			</InputBox>

			<InputBox>
				<StyledInput id="city" type="text" required />
				<StyledLabel htmlFor="city">City</StyledLabel>
			</InputBox>

			<InputBox>
				<StyledInput id="zipCode" type="text" required />
				<StyledLabel htmlFor="zipCode">Post/Zip Code</StyledLabel>
			</InputBox>

			<InputBox>
				<StyledInput id="adressLine" type="text" required />
				<StyledLabel htmlFor="adressLine">Adress Line</StyledLabel>
			</InputBox>

			<div className="button-box">
				<SaveButton onClick={changeToViewMode}>Save</SaveButton>
			</div>
		</StyledSection>
	);

	function changeToViewMode() {
		setEditAdress(false);
	}
}

export default AdressSection;

const StyledSection = styled.section`
	width: 100%;
	margin-bottom: 35px;

	.button-box {
		width: 100%;
		display: flex;
		justify-content: right;
	}
`;

const InputBox = styled.div`
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

	color: #000000;
	position: absolute;
	top: 5px;
	left: 17px;
`;

const SaveButton = styled.button`
	width: 185px;
	height: 42px;

	background: #000000;
	border: 1px solid #545454;
	border-radius: 10px;

	font-family: "Poppins";
	font-style: normal;
	font-weight: 600;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #fbfbfb;

	margin-top: 10px;
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
