import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between content-center items-center mx-5 p-5 me-10">
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
          <Route path="item/:itemId" element={<ItemDetailContainer/>}/>
          <Route path="*" element={<h1 className="text-center">404 NOT FOUND</h1>}/>
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
  