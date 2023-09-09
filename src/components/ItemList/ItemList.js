import Item from "../Item/Item";


const ItemList = ({ products }) => {
  return (
    <div className="ListGroup flex flex-wrap p-15 gap-x-5 justify-center">
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  );
};

export default ItemList;

