import "./Greetings.css";

function Greetings({ lang, children }) {
  const greetings = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div className="greeting">
      <p>
        {greetings[lang] || greetings["en"]} {children}
      </p>
    </div>
  );
}

Greetings.defaultProps = {
  lang: "en",
};

export default Greetings;

// function Greetings(props) {
//   const { lang } = props;

//   const langGreeting = (language) => {
//     switch (language) {
//       case "de":
//         return "Hallo";
//       case "fr":
//         return "Bonjour";
//       case "en":
//         return "Hello";
//       case "es":
//         return "Hola";
//     }
//   };

//   return (
//     <div className="greeting">
//       <p>{langGreeting(lang)} {props.children}</p>
//     </div>
//   );
// }

// export default Greetings;
