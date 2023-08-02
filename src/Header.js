import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/NavBar/Navbar";


function Header() {
    return (
        <header className="text-center d-flex gap-5 m-5">
            <h1>SneakerHeads</h1>
        <Navbar/>
        <ItemListContainer greeting={"Bienvenido"}/>
        </header>
    );
}

export default Header;