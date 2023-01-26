import PaymentMethodButton from "./PaymentMethodButton";
import { BsFillCreditCard2BackFill as CardIcon } from "react-icons/bs";
import { BiBarcode as BarCodeIcon } from "react-icons/bi";

function PaymentMethodSection() {
	return (
		<>
			<PaymentMethodButton Icon={CardIcon} text="Credit/Debit Card" />
			<PaymentMethodButton Icon={CardIcon} text="Credit/Debit Card" />
			<PaymentMethodButton Icon={BarCodeIcon} text="Bank Slip" />
		</>
	);
}

export default PaymentMethodSection;
