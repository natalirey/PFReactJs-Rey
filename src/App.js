import Navbar from "./components/NavBar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";



function App() {
  return (
    <>
    <header className="flex justify-between content-center items-center mx-5 p-5 me-10">
      <Navbar/>
    </header>
      <ItemListContainer/>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </>
  );
}

export default App;
  