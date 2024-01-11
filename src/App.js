import logo from "./logo.svg";
import "./App.css";
import HappyBirthday from "./components/HappyBirthday";
import HeroSlider from "./components/pages/HeroSlider";
import cake from "./assets/cake.png";

function App() {
  return (
    <div className="min-h-screen flex justify-center items-center">
    <div className="flex justify-center items-center">
    <div className="card left-[-20%] lg:left-0">
        <div className="outside ">
          <div className="front bg-gradient-to-r from-[#CBEFB6] to-[#48ada9]">
        
            
            <div className=" flex flex-col justify-center items-center">
            <h1 className='text-center uppercase font-doodle  font-medium text-[#255957] text-3xl pb-2 pt-6 mx-4 mt-6'>
            happy birthday Bushy!
            </h1>
              <img
                className="w-[80%]    "
                alt=""
                src={cake}
              />
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
