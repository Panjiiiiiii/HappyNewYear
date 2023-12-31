import Particles from "react-particles";
import {loadFireworksPreset} from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import Countdown from "react-countdown";


function App() {

  const [newYearMessage, setNewYearMessage] = useState(["Still waiting"])
  const particlesInit = async(engine) => {
    await loadFireworksPreset(engine)
  }
  
  function timeleft () {
    const newYearDate = new Date ("January 1, 2024, 00:00:00").getTime()
    const nowDate = new Date().getTime()
    const remaining = newYearDate - nowDate
    return remaining
  }

  return (
    <>
      <Particles
        init={particlesInit}
        options={{preset: "fireworks"}}
      />
      <div className="flex flex-col justify-center items-center min-h-screen gap-4">
        <span className="text-white text-4xl font-bold px-4 z-50">
          <Typewriter 
            words={newYearMessage} 
            loop={false}
            cursorStyle={"_"}
            cursor/>
        </span>
        <div className="z-50 text-white font-bold text-2xl">
          <Countdown date={Date.now() + timeleft()} onComplete={() => setNewYearMessage([
            "Thank's 2023", "Welcome 2024 !!!"
          ])}/>
        </div>
      </div>
    </>
  );
}

export default App;
