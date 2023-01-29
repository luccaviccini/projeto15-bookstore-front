import PaymentMethodButton from "./PaymentMethodButton";
import { BsFillCreditCard2BackFill as CardIcon } from "react-icons/bs";
import { BiBarcode as BarCodeIcon } from "react-icons/bi";
import { useState } from "react";

function PaymentMethodSection({ setPaymentMethod }) {
	const [clicked, setClicked] = useState();

	const options = [
		{
			Icon: CardIcon,
			text: "Credit/Debit Card",
			dbValue: "credit-debit-card",
		},
		{
			text: "PIX",
			dbValue: "pix",
		},
		{
			Icon: BarCodeIcon,
			text: "Bank Slip",
			dbValue: "bank-slip",
		},
	];

	return (
		<>
			{options.map((option, index) => (
				<PaymentMethodButton
					key={index}
					Icon={option.Icon}
					text={option.text}
					clicked={index == clicked}
					index={index}
					setClicked={setClicked}
					dbValue={option.dbValue}
					setPaymentMethod={setPaymentMethod}
				/>
			))}
		</>
	);
}

export default PaymentMethodSection;
