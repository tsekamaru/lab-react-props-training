import "./App.css";
import IdList from "./components/IdList";
import Greetings from "./components/Greetings";
import Random from "./components/Random";
import BoxColor from "./components/BoxColor";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import DriverCard from "./components/DriverCard";

function App() {
  return (
    <div className="App">
      <h1> LAB | React Training</h1>
      <h1>Iteration 1: IdCard</h1>
      <IdList />

      <h1>Iteration 2: Greetings</h1>
      <div id="greetingsContainer">
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>
        <Greetings>Benjamin</Greetings>
      </div>

      <h1>Iteration 3: Random</h1>
      <div id="random-container">
        <Random min={1} max={6} />
        <Random min={1} max={100} />
      </div>

      <h1>Iteration 4: BoxColor</h1>
      <div className="boxes-container">
        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />
      </div>

      <h1>Iteration 5: CreditCard</h1>
      <div className="credit-cards-container">
        <CreditCard
          type="Visa"
          number="0123456789018845"
          expirationMonth={3}
          expirationYear={2021}
          bank="BNP"
          owner="Maxence Bouret"
          bgColor="#11aa99"
          color="white"
        />

        <CreditCard
          type="Master Card"
          number="0123456789010995"
          expirationMonth={3}
          expirationYear={2021}
          bank="N26"
          owner="Maxence Bouret"
          bgColor="#eeeeee"
          color="#222222"
        />

        <CreditCard
          type="Visa"
          number="0123456789016984"
          expirationMonth={12}
          expirationYear={2019}
          bank="Name of the Bank"
          owner="Firstname Lastname"
          bgColor="#ddbb55"
          color="white"
        />
      </div>

      <h1>Iteration 6: Rating</h1>
      <div className="rating">
        <Rating>-15</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>-3</Rating>
        <Rating>2</Rating>
        <Rating>7</Rating>
      </div>

      <h1>Iteration 7: DriverCard</h1>
      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
          model: "Toyota Corolla Altis",
          licensePlate: "CO42DE",
        }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER",
        }}
      />
    </div>
  );
}

export default App;
