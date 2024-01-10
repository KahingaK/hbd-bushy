import logo from "./logo.svg";
import "./App.css";
import HappyBirthday from "./components/HappyBirthday";
import HeroSlider from "./components/pages/HeroSlider";
import bg from "./assets/bg.jpg";

function App() {
  return (
    <div className="App">
    <div className="">
    <div className="card left-[-30%] lg:left-0">
        <div className="outside">
          <div className="front">
            {/* <h1 className=' uppercase font-secondary font-medium text-2xl p-4'>happy birthday</h1> */}
            <div className="">
              {/* <img
                className="max-h-100% max-w-100% object-cover"
                alt=""
                src={bg}
              /> */}
            </div>
          </div>
          <div className="back">back</div>
        </div>
        <div className="inside">{/* <HeroSlider/> */}</div>
      </div>
    </div>
      
    </div>
  );
}

export default App;
