import AdressSumary from "./AdressSummary";
import { useContext, useState } from "react";
import styled from "styled-components";
import InputBox from "./InputBox";
import { apiServices } from "../../services/apiServices";
import UserContext from "../context/UserContext";

function AdressSection() {
	const [editAdress, setEditAdress] = useState(false);
	const [name, setName] = useState();
	const [phoneNumber, setPhoneNumber] = useState();
	const [city, setCity] = useState();
	const [zipCode, setZipCode] = useState();
	const [adressLine, setAdressLine] = useState();
	const { token } = useContext(UserContext);

	if (!editAdress)
		return (
			<StyledSection>
				<AdressSumary setEditAdress={setEditAdress} />
			</StyledSection>
		);

	return (
		<StyledSection>
			<InputBox
				id="name"
				type="text"
				text="Name"
				value={name}
				setValue={setName}
				required
			/>
			<InputBox
				id="phoneNumber"
				type="text"
				text="Phone Number"
				value={phoneNumber}
				setValue={setPhoneNumber}
				required
			/>
			<InputBox
				id="city"
				type="text"
				text="City"
				value={city}
				setValue={setCity}
				required
			/>
			<InputBox
				id="zipCode"
				type="text"
				text="Post/Zip Code"
				value={zipCode}
				setValue={setZipCode}
				required
			/>
			<InputBox
				id="adressLine"
				type="text"
				text="Adress Line"
				value={adressLine}
				setValue={setAdressLine}
				required
			/>

			<div className="button-box">
				<SaveButton onClick={handleClick}>Save</SaveButton>
			</div>
		</StyledSection>
	);

	function handleClick() {
		const request = apiServices.changeAdress(token, {
			name,
			phoneNumber,
			city,
			zipCode,
			adressLine,
		});
		request.then((answer) => console.log(answer));
		request.catch((err) => console.log(err));
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
