import styled from "styled-components";
import PaymentMethodSection from "../components/payment-method/PaymentMethodSection";
import PriceBottomBar from "../components/app-bars/PriceBottomBar";
import TopBar from "../components/app-bars/TopBar";
import { useContext, useState } from "react";
import AdressSection from "../components/adress-section/AdressSection";
import UserContext from "../components/context/UserContext";
import { apiServices } from "../services/apiServices";
import SucessPage from "./SuccessPage";

function CheckoutPage() {
	const { token, total } = useContext(UserContext);
	const [paymentMethod, setPaymentMethod] = useState();
	const [saleFinished, setSaleFinished] = useState(false);

	if (saleFinished) return <SucessPage />;

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
