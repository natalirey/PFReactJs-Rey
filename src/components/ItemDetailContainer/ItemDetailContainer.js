import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../db/Firebase';
import Loader from '../Loader/Loader'; 

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const itemDoc = doc(db, 'products', itemId);

    getDoc(itemDoc)
      .then((response) => {
        const data = response.data();
        const productCollection = { id: response.id, ...data };
        setProduct(productCollection);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="p-5 flex justify-center">
      {loading ? (
        <Loader /> 
      ) : (
        <ItemDetail {...product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
