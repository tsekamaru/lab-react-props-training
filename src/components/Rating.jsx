import './Rating.css'

function Rating(props) {
  const stars = Math.round(props.children);
  let result = "";
  if (stars > 5) {
    result = "★★★★★";
  } else if (stars < 0) {
    result = "☆☆☆☆☆";
  } else {
    result = "★".repeat(stars) + "☆".repeat(5 - stars);
  }

  return <p>{result}</p>;
}

export default Rating;