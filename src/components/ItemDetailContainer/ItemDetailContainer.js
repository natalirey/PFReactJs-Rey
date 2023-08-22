import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import { productById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        productById('1')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })
    },[])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer