import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Checkout from "./Pages/Checkout"
import About from "./Pages/About"
import NotFound from "./Pages/NotFound"
import NotFound from "./Pages/NotFound"
import Header from "./Components/Header"
import Footer from "./Components/Footer"


function App() {
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header/ >
      <main className="flex-grow container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book/:id" element={<BookDetails/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
      <Footer/>
    </div>
  )
}

export default App
