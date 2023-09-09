import { createContext } from "react";

export const context = createContext()
const Provider = context.Provider

const MyCustomProvider = (props) => {

    const valueContext = {
        carrito : [],
        montoTotal : 0,
        cantidadTotal : 5,
    }

    return (
        <Provider value={valueContext}>
            {props.children}
        </Provider>
    )
}

export default MyCustomProvider;