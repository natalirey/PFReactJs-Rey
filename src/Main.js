import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFoundImage from './components/CartWidget/assets/notFound.jpg';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function Main(){
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
                <Route path="item/:itemId" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<div>
                    <h1 className="text-center">404 NOT FOUND</h1>
                    <img src={NotFoundImage} className="w-32 h-32 mx-auto" alt="404 Not Found"/></div>} />
            </Routes>
        </main>
    )
}

export default Main