import './App.css'
import {Header} from './components/Header'
import {LoginPanel} from './components/LoginPanel'
import {MainContent} from './components/MainContent'
import {FlightList} from "./components/Flights.jsx";
import {ParallaxBack} from "./components/ParallaxBack.jsx";
import {Tracking} from "./components/Tracking.jsx";
import {About} from "./components/About.jsx";
import {Contact} from "./components/Contact.jsx";
import {Footer} from "./components/Footer.jsx";
import parallax1 from "./assets/parallax1.jpg"
import parallax2 from "./assets/parallax2.jpg"
import parallax3 from "./assets/parallax3.jpg"


function App() {
    return (
        <div className="relative h-screen w-full">
            <Header/>
            <div id={"main"} className="bg-main-bg bg-cover bg-center w-full h-full flex items-center justify-between px-44">
                <LoginPanel/>
                <MainContent/>
            </div>
            <FlightList />
            <ParallaxBack image={parallax1}/>
            <Tracking />
            <ParallaxBack image={parallax2}/>
            <About />
            <ParallaxBack image={parallax3}/>
            <Contact />
            <Footer />
        </div>
    )
}

export default App
