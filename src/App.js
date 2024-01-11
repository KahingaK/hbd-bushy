import logo from "./logo.svg";
import "./App.css";
import HappyBirthday from "./components/HappyBirthday";
import HeroSlider from "./components/pages/HeroSlider";
import cake from "./assets/cake.png";
import loons from "./assets/loons.png";
import confetti from "./assets/confetti.png";

function App() {
  return (
    <div className="birthdayCard">
    <div className="cardFront">
      <div className="front-text ">
      <h3 className="happy">HAPPY</h3>
      <h2 className="bday">BIRTHDAY</h2> 
      <h3 className="toyou">BUSHY!</h3>  
      </div>
      <div className="wrap-deco z-10">
    <div className="decorations"></div>
    <div className="decorationsTwo"></div>
      </div> 
        <div className="wrap-decoTwo z-10">
    <div className="decorations"></div>
    <div className="decorationsThree"></div>
      </div>
      <div className=" absolute w-[140px] h-[5px] left-[60px] top-[110px]">
        <img alt="" src={cake}/>
       
      </div>
      <div className="deco absolute w-[140px] w-[40%] h-[5px] left-[1px] top-[112px]">
        <img alt="" src={loons}/>
       
      </div>
      <div className=" deco absolute w-[140px] w-[40%] h-[5px] left-[150px] top-[110px] scale-x-[-1]">
        <img alt="" src={loons}/>
       
      </div>
      {/* <div className="deco z-0 absolute w-[140px] h-[5px] left-[-50px] top-[270px] ">
        <img alt="" src={confetti}/>
       
      </div> */}

    </div>
      
      <div className="cardInside">
         <div className="inside-text text-md">
      <h3 className="happy">MO LIFE</h3>
      <h2 className="bday">MO BLESSINGS</h2> 
      <h3 className="toyou"></h3>  
      </div>
        <div className="wishes text-md font-kalam">
        <p>Happy birthday!,</p>
        <p> I hope your day is filled with lots of love and laughter! Even though its been a while, know that i'm still here, cheering you on and sending lots of love your way! May all of your wishes come true.</p>
        <p className="name font-dancing">kahinga</p>
        </div>
      </div>
    </div>
  );
}

export default App;
