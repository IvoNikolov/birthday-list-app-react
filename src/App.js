import FriendsList from "./components/Friends/FriendsList";
import PresentsList from "./components/Presents/PresentsList";
import "./App.css";

function App() {
  const title = "Jason's Super Incredibly Awesome Birthday Extravaganza";
  const friends = [
    {
      id: 1,
      name: "Maria",
      age: 12,
      hobbies: ["watching tv", "knitting", "reading books"],
      friendRating: 5,
    },
    {
      name: "Arthur",
      age: 14,
      hobbies: ["basketball", "football", "tennis"],
      friendRating: 4,
    },
    {
      name: "Tim",
      age: 15,
      hobbies: ["fishing", "rolleblading", "hiking"],
      friendRating: 2,
    },
    {
      name: "Alex",
      age: 11,
      hobbies: ["building sandcastles", "surfing", "swimming"],
      friendRating: 4,
    },
    {
      name: "Johnny",
      age: 12,
      hobbies: ["playing xbox", "fooball", "playing with his dog"],
      friendRating: 1,
    },
    {
      name: "Lara",
      age: 12,
      hobbies: ["watching tv", "cooking", "reading books"],
      friendRating: 4,
    },
    {
      name: "Sofia",
      age: 12,
      hobbies: ["watching tv", "knitting", "reading books"],
      friendRating: 4,
    },
    {
      name: "Tina",
      age: 13,
      hobbies: ["watching tv", "cooking", "reading books"],
      friendRating: 4,
    },
  ];

  const presents = [
    {
      id: 1,
      name: "kite",
      price: 32,
    },
    {
      id: 2,
      name: "toy-car",
      price: 1200,
    },
    {
      id: 3,
      name: "ps5",
      price: 2000,
    },
  ];

  return (
    <div className="App">
      <div className="header">
        <img src="/img/balloons.png" alt="baloons" />
        <h2 className="header__title">{title} </h2>
        <img src="img/balloons.png" alt="baloons" />
      </div>
      <FriendsList friends={friends}></FriendsList>
      <PresentsList items={presents}></PresentsList>
    </div>
  );
}

export default App;
