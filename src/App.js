import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Suhag></Suhag>
    </div>
  );
}

function Person() {
  return (
    <div className="person">
      <h2>Shakib Al Hasan</h2>
      <p>Profession: Cricketer</p>
    </div>
  );
}

const Suhag = () => {
  const suhag = {
    backgroundColor: "tomato",
    border: "3px solid violet",
    borderRadius: "20px",
    color: "#fff",
    margin: "20px",
  };
  return (
    <div style={suhag}>
      <h2>Name: Suhag</h2>
      <p>Profession: Programmer</p>
    </div>
  );
};

export default App;
