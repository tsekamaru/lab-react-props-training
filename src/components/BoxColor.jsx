import "./BoxColor.css";

function BoxColor(props) {
  const { r, g, b } = props;
  const divColor = `rgb(${r},${g},${b})`;

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
  }

  return (
    <div className="box" style={{ backgroundColor: divColor }}>
      <p>{divColor}</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
}

export default BoxColor;
