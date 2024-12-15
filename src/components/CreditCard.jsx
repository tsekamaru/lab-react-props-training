import "./CreditCard.css";
import visaLogo from "../assets/images/visa.png";
import masterLogo from "../assets/images/master-card.svg";

function CreditCard(props) {
  const { type, number, expirationMonth, expirationYear, bank, owner, bgColor, color } = props;

  function cardNumberHider(cardNumber) {
    return "**** **** **** " + cardNumber.slice(-4);
  }

  function VisaOrMaster(cardType) {
    return cardType === "Visa" ? visaLogo : masterLogo;
  }

  return (
    <div className="card" style={{ backgroundColor: bgColor, color: color }}>
      <div className="img-container">
        <img src={VisaOrMaster(type)} alt="logo"></img>
      </div>
      <div className="card-info-container">
        <h4>{cardNumberHider(number)}</h4>
        <p>
          Expires {expirationMonth}/{expirationYear} {bank}
        </p>
        <p>{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;
