import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Person name="Shakib Al Hasan" tagline="Mr. All Rounder"></Person>
      <Person name="Masrafi bin Mortoza" tagline="The Captain"></Person>
      <Person name="Tamim Iqbal" tagline="Dashing Opener"></Person>
      <Person name="Mosfiqur Rahim" tagline="Mr. Dependeable"></Person>
      <Person name="Mahmudullah Riyad" tagline="Slient Killer "></Person>

      <Friend name="Suhag" address="Tangail"></Friend>
      <Friend name="Sanji" address="Comilla"></Friend>
      <Friend name="Amran" address="Laskmipur"></Friend>
      <Friend name="Sakib" address="Jaypurhat"></Friend>
      <Friend name="Jasy" address="Bramonbaira"></Friend>
      <Friend name="Nite" address="Narayangonj"></Friend>
      <Friend name="Tisha" address="Jamalpur"></Friend>
      <Friend name="Selim" address="Mymensingh"></Friend>
      <Friend name="Sohan" address="Dhaka"></Friend>
      <Friend name="Din" address="Cadpur"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className="person">
      <h2>{props.name}</h2>
      <p>{props.tagline}</p>
    </div>
  );
}

const Friend = (props) => {
  const friend = {
    backgroundColor: "tomato",
    border: "3px solid violet",
    borderRadius: "20px",
    color: "#fff",
    margin: "20px",
  };
  return (
    <div style={friend}>
      <h2>Name: {props.name}</h2>
      <p>Address: {props.address}</p>
    </div>
  );
};

export default App;
