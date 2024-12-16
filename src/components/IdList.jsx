import './IdList.css'
import IdCard from "./IdCard";

function IdList() {
  return (
    <div className="id-list">
      <IdCard
        lastName="Doe"
        firstName="John"
        gender="male"
        height={178}
        birth={new Date("1992-07-14")}
        // birth="Tue Jul 14 1992"
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName="Delores"
        firstName="Obrien"
        gender="female"
        height={172}
        birth={new Date("1988-05-11")}
        // birth="Tue May 11 1993"
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />
    </div>
  );
}

export default IdList;
