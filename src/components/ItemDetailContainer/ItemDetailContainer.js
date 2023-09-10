import './ItemDetailContainer.css'
import { useEffect, useState } from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../db/Firebase'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)

        const itemDoc = doc (db, 'products', itemId)

        getDoc (itemDoc)
        .then (response => { 
            const data = response.data()
            const productCollection = { id: response.id, ...data }
            setProduct(productCollection)
        })
            .catch(error => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        },[itemId])

    //     getProductById(itemId)
    //     .then(response => {
    //         setProduct(response)
    //     })
    //     .catch(error => {
    //         console.error(error)
    //     })
    // },[itemId])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer