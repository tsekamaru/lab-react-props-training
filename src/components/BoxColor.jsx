import "./BoxColor.css";

function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r}, ${g}, ${b})`;
  const hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;

  return (
    <div className="box" style={{ backgroundColor: rgb, color: "#fff", padding: "10px" }}>
      <p>{rgb}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;

// function BoxColor(props) {
//   const { r, g, b } = props;
//   const divColor = `rgb(${r},${g},${b})`;

//   function rgbToHex(r, g, b) {
//     return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
//   }

//   return (
//     <div className="box" style={{ backgroundColor: divColor }}>
//       <p>{divColor}</p>
//       <p>{rgbToHex(r, g, b)}</p>
//     </div>
//   );
// }

// export default BoxColor;
