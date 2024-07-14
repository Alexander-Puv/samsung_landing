import Expolre from "./components/Expolre"
import Header from "./components/Header"
import galaxyNote9 from './assets/galaxyNote9.png'
import galaxyNote92 from './assets/galaxyNote92.png'
import galaxyTabS4 from './assets/galaxyTabS4.png'
import Product from "./components/UI/Product"
import Connect from "./components/Connect"
import GearIconX from "./components/GearIconX"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="main">
      <Header />
      <Expolre />
      <Product image={galaxyNote9} title='The new super powerful Galaxy Note9' text='Meet the latest member of the Galaxy family.' btnText='Buy now' bgColor='1' />
      <Connect />
      <Product image={galaxyNote92} title='Galaxy Note9: See what else it can do.' text="The Galaxy Note9 is packed with features to up your photo game and connect you more deeply with the things that are important to you. See how it's redefining the smartphone. Meet the latest member of the Galaxy family." btnText='Learn more' bgColor='2' imageSide='left' />
      <GearIconX />
      <Product image={galaxyTabS4} title='Tablet mobility.PC power.' text='The Galaxy Tab S4 gives you a stunningly brilliant screen, a PC experience in a tablet and more.' btnText='Buy now' bgColor='3' />
      <Footer />
    </main>
  )
}

export default App
