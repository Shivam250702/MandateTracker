import "./Components/Style.css";
import "./header/Header.css";
import "./App.css";
import React, { useState, useEffect, useRef } from 'react'
import Header from "./header/Header";
import Home from "./Pages/Home";
import NET from 'vanta/dist/vanta.net.min'
import FormComponent from "./Components/Form3";
export default function App() {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: myRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        scale: 1.00,
        scaleMobile: 1.00,
      }))
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="App">
    
<Header/>
<div className="vanta-container" ref={myRef}></div>
      <Home />
      {/* <FormComponent/> */}
     
    </div>
  );
}
