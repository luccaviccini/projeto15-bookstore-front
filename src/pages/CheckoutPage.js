import styled from "styled-components";
import PaymentMethodButton from "../components/payment-method/PaymentMethodButton";
import PaymentMethodSection from "../components/payment-method/PaymentMethodSection";
import PriceBottomBar from "../components/PriceBottomBar";
import TopBar from "../components/TopBar";
import { useState } from "react";

function CheckoutPage() {
	const [paymentMethod, setPaymentMethod] = useState();
	return (
		<Page>
			<TopBar title="Checkout" />
			<SectionTitle>Shipping Adress</SectionTitle>
			<SectionTitle>Payment Method</SectionTitle>
			<PaymentMethodSection />
			<PriceBottomBar text="Place order" />
		</Page>
	);
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
