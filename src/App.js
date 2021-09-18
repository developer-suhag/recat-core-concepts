import "./App.css";

function App() {
  const greatProgrammers = [
    { name: "Jhankar Mahbub", desgination: "Senior Web Developer" },
    { name: "Anisul Islam", desgination: "Senior Programmer" },
    { name: "Sumit Saha", desgination: "Web Developer" },
    { name: "Tamim Sahriar Sobin", desgination: "Senior Programmer" },
  ];
  return (
    <div className="App">
      {/* <GreatProgrammers name="Suhag" desgination="web dev"></GreatProgrammers> */}
      {greatProgrammers.map((programmer) => (
        <GreatProgrammers
          name={programmer.name}
          desgination={programmer.desgination}
        ></GreatProgrammers>
      ))}

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

function GreatProgrammers(props) {
  return (
    <div className="programmers">
      <h2>Name: {props.name}</h2>
      <h4>Designation: {props.desgination}</h4>
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
    padding: "20px",
  };
  return (
    <div style={friend}>
      <h2>Name: {props.name}</h2>
      <p>Address: {props.address}</p>
    </div>
  );
};

export default App;
