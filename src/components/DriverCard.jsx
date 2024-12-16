import "./DriverCard.css";
import Rating from "./Rating";

function DriverCard({ name, rating, img, car }) {
  return (
    <div className="card-container">

      <div className="image-container">
        <img src={img} alt={name} />
      </div>

      <div className="info-container">
        <h3>{name}</h3>
        <Rating>{rating}</Rating>
        <p>
          {car.model} - {car.licensePlate}
        </p>
      </div>
      
    </div>
  );
}

export default DriverCard;

// function DriverCard(props) {
//   const { name, rating, img, car } = props;
//   const stars = Math.round(rating);
//   let result = "";

//   if (stars > 5) {
//     result = "★★★★★";
//   } else if (stars < 0) {
//     result = "☆☆☆☆☆";
//   } else {
//     result = "★".repeat(stars) + "☆".repeat(5 - stars);
//   }

//   return (
//     <div className="card-container">
//       <div className="image-container">
//         <img src={img} alt="Profile picture" />
//       </div>

//       <div className="info-container">
//         <h3>{name}</h3>
//         <p className="stars">{result}</p>
//         <p className="car-info">
//           {car.model} - {car.licensePlate}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default DriverCard;
