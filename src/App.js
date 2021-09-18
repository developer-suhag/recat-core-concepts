import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const greatProgrammers = [
    { name: "Jhankar Mahbub", desgination: "Senior Web Developer" },
    { name: "Anisul Islam", desgination: "Senior Programmer" },
    { name: "Sumit Saha", desgination: "Web Developer" },
    { name: "Tamim Sahriar Sobin", desgination: "Senior Programmer" },
  ];

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const [randomUsers, setrandomUsers] = useState([]);
  // console.log(randomUsers);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((data) => setrandomUsers(data.results));
  }, []);
  return (
    <div className="App">
      {/* make counter / use state */}
      <Counter></Counter>

      {/* load users */}
      {users.map((user) => (
        <Users name={user.name} email={user.email}></Users>
      ))}

      {randomUsers.map((user) => (
        <RandomUsers
          name={user.name.first + " " + user.name.last}
          phone={user.phone}
          email={user.email}
          pic={user.picture.medium}
          country={user.location.country}
        ></RandomUsers>
      ))}

      {/* create component */}
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
//load dynamic data (users)
function Users(props) {
  return (
    <div className="user">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email.toLowerCase()}</p>
    </div>
  );
}

const RandomUsers = (props) => {
  return (
    <div className="random-user">
      <img src={props.pic} alt="" />
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
      <p>Country: {props.country}</p>
    </div>
  );
};

// create counter (use state)
const Counter = () => {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button style={{ margin: "5px" }} onClick={increase}>
        Increase
      </button>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
};
// make componet with props
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
