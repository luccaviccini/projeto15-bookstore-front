import PaymentMethodButton from "./PaymentMethodButton";
import { BsFillCreditCard2BackFill as CardIcon } from "react-icons/bs";
import { BiBarcode as BarCodeIcon } from "react-icons/bi";
import { useState } from "react/cjs/react.production.min";

function PaymentMethodSection() {
	const [clicked, setClicked] = useState();
	return (
		<>
			<PaymentMethodButton
				Icon={CardIcon}
				text="Credit/Debit Card"
				clicked
			/>
			<PaymentMethodButton text="PIX" />
			<PaymentMethodButton Icon={BarCodeIcon} text="Bank Slip" />
		</>
	);
}

export default PaymentMethodSection;
