import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./components/Context/MyContext";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Main />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
