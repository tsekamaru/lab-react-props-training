import './Random.css'

function Random(props) {
  const { min, max } = props;
  const randomBetween = (low, high) => Math.floor(Math.random() * (high - low + 1) + low);

  return (
    <p>
      Random value between {min} and {max} => {randomBetween(min, max)}
    </p>
  );
}

export default Random;
