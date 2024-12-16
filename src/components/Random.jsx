import './Random.css'

function Random({ min, max }) {
  const randomNum = Math.floor(Math.random() * (max - min + 1) + min);
  return <p>Random value between {min} and {max} => {randomNum}</p>;
}

export default Random;

// function Random(props) {
//   const { min, max } = props;
//   const randomBetween = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);

//   return (
//     <p>
//       Random value between {min} and {max} => {randomBetween(min, max)}
//     </p>
//   );
// }

// export default Random;
