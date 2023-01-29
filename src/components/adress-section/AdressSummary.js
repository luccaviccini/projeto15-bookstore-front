import styled from "styled-components";
import { GrLocation as LocationIcon } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { apiServices } from "../../services/apiServices";
import UserContext from "../context/UserContext";

function AdressSumary({ setEditAdress }) {
	const [userAdress, setUserAdress] = useState(null);
	const { token } = useContext(UserContext);

	useEffect(() => {
		const promise = apiServices.getUserAdress(token);
		promise.then((answer) => setUserAdress(answer.data));
		promise.catch((err) => console.log(err));
	}, []);

	return (
		<ResumeAdress onClick={changeToEdit}>
			<div className="left-box">
				<LocationIcon className="icon" />
				<AdressText>
					{!userAdress ? "Shipment location" : userAdress.adressLine}
				</AdressText>
			</div>

			<ChooseText>Choose</ChooseText>
		</ResumeAdress>
	);

	function changeToEdit() {
		setEditAdress(true);
	}
}

export default AdressSumary;

const ResumeAdress = styled.div`
	width: 100%;
	height: 55px;
	left: 40px;
	top: 200px;
	background: #e1e1e1;
	border-radius: 10px;

	box-sizing: border-box;
	padding: 12px 20px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	margin-bottom: 10px;

	.left-box {
		display: flex;
		align-items: center;
	}

	.icon {
		font-size: 24px;
		margin-right: 15px;
	}
`;

const AdressText = styled.h4`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #000000;

	width: 140px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
`;

const ChooseText = styled.p`
	font-family: "Poppins";
	font-style: normal;
	font-weight: 500;
	font-size: 15px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #4285f4;
`;
