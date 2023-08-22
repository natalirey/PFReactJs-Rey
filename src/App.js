import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <>
    <header className="flex justify-between content-center items-center mx-5 p-5 me-10">
      <Navbar/>
    </header>
      <ItemListContainer/>
      {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/> */}
      <ItemDetailContainer/>
    </>
  );
}

export default App;
  