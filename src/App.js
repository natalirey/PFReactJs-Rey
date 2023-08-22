import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
// import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <header className="flex justify-between content-center items-center mx-5 p-5 me-10">
        <Navbar/>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/nike" element={<ItemListContainer/>}/>
          <Route path="/jordan" element={<ItemListContainer/>}/>
          <Route path="/adidas" element={<ItemListContainer/>}/>
          {/* <Route path="/item/:id" element={<ItemListContainer/>}/> */}
        </Routes>
      </main>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
      {/* <ItemDetailContainer/> */}
    </BrowserRouter>
  );
}

export default App;
  