import PropTypes from 'prop-types';

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div className="idCard">
      <img src={picture} alt="profile" />
      <div>
        <p><strong>First name:</strong> {firstName}</p>
        <p><strong>Last name:</strong> {lastName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Height:</strong> {height}cm</p>
        <p><strong>Birth:</strong> {birth.toDateString()}</p>
      </div>
    </div>
  );
}

IdCard.propTypes = {
  lastName: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  birth: PropTypes.instanceOf(Date).isRequired,
  picture: PropTypes.string.isRequired,
};

export default IdCard;

// function IdCard(props) {
//   const { lastName, firstName, gender, height, birth, picture } = props;
//   return (
//     <div className="id-card">
//       <img src={picture} alt="profile_picture" />
//       <div className="personal-info">
//         <p>
//           <b>First name:</b> {firstName}{" "}
//         </p>
//         <p>
//           <b>Last name:</b> {lastName}{" "}
//         </p>
//         <p>
//           <b>Gender:</b> {gender}{" "}
//         </p>
//         <p>
//           <b>Height</b> {height}{" "}
//         </p>
//         <p>
//           <b>Birth:</b> {birth}{" "}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default IdCard;


