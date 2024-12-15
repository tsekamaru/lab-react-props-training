import './Greetings.css'

function Greetings(props) {
  const { lang } = props;
  
  const langGreeting = (language) => {
    switch (language) {
      case "de":
        return "Hallo";
      case "fr":
        return "Bonjour";
      case "en":
        return "Hello";
      case "es":
        return "Hola";
    }
  };

  return (
    <div className="greeting">
      <p>{langGreeting(lang)} {props.children}</p>
    </div>
  );
}

export default Greetings;
