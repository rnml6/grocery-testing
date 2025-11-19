const ProductList = ({ items }) => {
  return <div>{items && items.map((item) => (

   
  <div className=" border-1 m-5 p-5 rounded-2xl">
  <div><strong>Product Name: </strong>{item.product}</div>
  <div><strong>Category: </strong>{item.category}</div>
  <div><strong>Price: </strong>{item.price}</div>
  <div><strong>Status: </strong>{item.status}</div>
  </div>

))}</div>
}

export default ProductList
