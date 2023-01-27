import PaymentMethodButton from "./PaymentMethodButton";
import { BsFillCreditCard2BackFill as CardIcon } from "react-icons/bs";
import { BiBarcode as BarCodeIcon } from "react-icons/bi";
import { useState } from "react";

function PaymentMethodSection() {
	const [clicked, setClicked] = useState();

	const options = [
		{
			Icon: CardIcon,
			text: "Credit/Debit Card",
		},
		{
			text: "PIX",
		},
		{
			Icon: BarCodeIcon,
			text: "Bank Slip",
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
				/>
			))}
		</>
	);
}

export default PaymentMethodSection;
