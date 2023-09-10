import { useEffect, useState } from "react";
import { getProducts , getProductsByCategory } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../db/Firebase";
import { getDocs , collection , query , where} from "firebase/firestore";

const ItemListContainer = ({}) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState (true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading (true)

    // const productsCollection = collection(db, "products")

    // const laConsulta = getDocs(productsCollection)
    const collectionCategory = categoryId
    ? query (collection (db,'products'), where ('category' , '==' , categoryId))
    : collection (db, 'products')

    getDocs(collectionCategory)
    .then (response => {
      const ProductsCollection = response.docs.map(doc =>{
      const data = doc.data()
      return { id: doc.id, ...data}
      })
      setProducts (ProductsCollection)
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [categoryId]);

//     const asyncFunc = categoryId ? getProductsByCategory : getProducts

//     asyncFunc(categoryId)
//     .then (response => {
//       setProducts(response)
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }, [categoryId]);


  //   getProducts()
  //     .then((response) => {
  //       setProducts(response);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div>
      <ItemList products={products}/>
    </div>
  );
};

export default ItemListContainer;
