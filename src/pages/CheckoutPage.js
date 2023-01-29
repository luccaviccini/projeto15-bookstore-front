import styled from "styled-components";
import PaymentMethodSection from "../components/payment-method/PaymentMethodSection";
import PriceBottomBar from "../components/app-bars/PriceBottomBar";
import TopBar from "../components/app-bars/TopBar";
import { useContext, useState } from "react";
import AdressSection from "../components/adress-section/AdressSection";
import UserContext from "../components/context/UserContext";
import { apiServices } from "../services/apiServices";
import { MdOutlineDoneOutline as CompleteIcon } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function CheckoutPage() {
	const { token, total } = useContext(UserContext);
	const [paymentMethod, setPaymentMethod] = useState();
	const [saleFinished, setSaleFinished] = useState(false);
	const navigate = useNavigate();

	if (saleFinished)
		return (
			<SucessPage>
				<CompleteIcon className="icon" />
				<SuccessText>Purchase completed successfully!</SuccessText>
				<SuccessText className="link" onClick={goToHome}>
					Go back
				</SuccessText>
			</SucessPage>
		);

	return (
		<Page>
			<TopBar title="Checkout" link="/my-bag" />
			<SectionTitle>Shipping Adress</SectionTitle>
			<AdressSection />
			<SectionTitle>Payment Method</SectionTitle>
			<PaymentMethodSection
				paymentMethod={paymentMethod}
				setPaymentMethod={setPaymentMethod}
			/>
			<PriceBottomBar
				text="Place order"
				handleClick={handleClick}
				total={total}
			/>
		</Page>
	);

	function handleClick() {
		console.log(paymentMethod);
		const promise = apiServices.placeOrder(token, paymentMethod);
		promise.then(() => setSaleFinished(true));
		promise.catch((err) => console.log(err));
	}

	function goToHome() {
		navigate("/home");
	}
}

export default CheckoutPage;

const Page = styled.div`
	background-color: EFEFEF;
	box-sizing: border-box;
	padding: 25px 40px 0 40px;

	width: 100vw;
	height: 100vh;
	margin-bottom: 240px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SectionTitle = styled.h2`
	font-family: "Playfair Display";
	font-style: normal;
	font-weight: 700;
	font-size: 22px;
	line-height: 22px;
	letter-spacing: -0.408px;
	color: #000000;

	width: 100%;
	display: flex;
	justify-content: left;
	margin-bottom: 30px;
`;

const SucessPage = styled.div`
	background-color: rgb(5, 129, 36);
	box-sizing: border-box;
	padding: 25px 40px 0 40px;

	width: 100vw;
	height: 100vh;
	margin-bottom: 240px;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.icon {
		color: #fff;
		font-size: 60px;
		margin-bottom: 40px;
	}
`;

const SuccessText = styled.h1`
	font-family: "Playfair Display";
	font-style: normal;
	font-weight: 700;
	font-size: 30px;
	line-height: 22px;
	text-align: center;
	letter-spacing: -0.408px;
	color: #fff;
`;
