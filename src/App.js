import Memory from "./components/Memory/Memory";
import dog from "../src/components/Images/dog.jpg";
import bird from "../src/components/Images/bird.jpg";
import cat from "../src/components/Images/cat.jpg";
import pigeon from "../src/components/Images/pigeon.jpg";
import rabbit from "../src/components/Images/rabbit.jpg";
import starfish from "../src/components/Images/starfish.jpg";
const dummy_data = [
  {
    img: bird,
    id: "1",
    status: "",
  },
  {
    img: bird,
    id: "1",
    status: "",
  },
  {
    img: cat,
    id: "2",
    status: "",
  },
  {
    img: cat,
    id: "2",
    status: "",
  },
  {
    img: dog,
    id: "3",
    status: "",
  },
  {
    img: dog,
    id: "3",
    status: "",
  },
  {
    img: pigeon,
    id: "4",
    status: "",
  },
  {
    img: pigeon,
    id: "4",
    status: "",
  },
  {
    img: rabbit,
    id: "5",
    status: "",
  },
  {
    img: rabbit,
    id: "5",
    status: "",
  },
  {
    img: starfish,
    id: "6",
    status: "",
  },
  {
    img: starfish,
    id: "6",
    status: "",
  },
];
// .sort(() => Math.random() - 0.5);
function App() {
  return <Memory dummyData={dummy_data} />;
}

export default App;
