import "./Rating.css";

function Rating({ children }) {
  const stars = Math.round(children);
  const starIcons = Array.from({ length: 5 }, (element, index) => (index < stars ? "★" : "☆"));

  return <p>{starIcons.join(" ")}</p>;
}

export default Rating;

// function Rating(props) {
//   const stars = Math.round(props.children);
//   let result = "";
//   if (stars > 5) {
//     result = "★★★★★";
//   } else if (stars < 0) {
//     result = "☆☆☆☆☆";
//   } else {
//     result = "★".repeat(stars) + "☆".repeat(5 - stars);
//   }

//   return <p>{result}</p>;
// }

// export default Rating;
