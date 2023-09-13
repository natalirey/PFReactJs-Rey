import Navbar from "./components/NavBar/Navbar";

function Header(){
    return(
    <header className="flex justify-between content-center items-center mx-5 p-5 me-10">
        <Navbar/>
    </header>
    )
}

export default Header