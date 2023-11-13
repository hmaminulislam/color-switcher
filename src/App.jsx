import { faGear } from "@fortawesome/free-solid-svg-icons"
import Hero from "./components/hero/Hero"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './App.css'
import { useRef, useState } from "react";

function App() {
  const [open, setOpen] = useState(false)
  const colorSwicher = useRef()

  // handle switch button
  const handleSwichBtn = async() => {
    setOpen(!open)
    if(open) {
      colorSwicher.current.classList.add('color-swicher-active');
    } else {
      colorSwicher.current.classList.remove('color-swicher-active');
    }
  }

  // handle switch color chnage 
  const handleSwitch = (e) => {
    const element = e.target
    const dataColor = element.getAttribute('data-color')
    document.querySelector(':root').style.setProperty('--main-color', dataColor)
  }

  

  return (
    <div className="main">
      <div ref={colorSwicher} className="color-swither">
      <div className="color-swither-wrapper">
        <h4 className="select-color-title">Select your color</h4>
        <div className="color-btn-group">
        <span onClick={handleSwitch} className="color-btn" data-color="#E65F78" style={{background: "#E65F78"}}></span>
        <span onClick={handleSwitch} className="color-btn" data-color="#37B8DF" style={{background: "#37B8DF"}}></span>
        <span onClick={handleSwitch} className="color-btn" data-color="#31B164" style={{background: "#31B164"}}></span>
        <span onClick={handleSwitch} className="color-btn" data-color="#5D69F6" style={{background: "#5D69F6"}}></span>
        <span onClick={handleSwitch} className="color-btn" data-color="#87CEEB" style={{background: "#87CEEB"}}></span>
        <span onClick={handleSwitch} className="color-btn" data-color="#F2B31A" style={{background: "#F2B31A"}}></span>
        </div>
      </div>
      <div className="switcher-icon-wrapper">
      <FontAwesomeIcon onClick={handleSwichBtn} className="swither-icon" icon={faGear} />
      </div>
      </div>
      <Hero/>
    </div>
  )
}

export default App

