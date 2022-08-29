import { createContext, useState } from "react";

export const ProductContext = createContext();
function ProductProvider(props) {
  const [productCart, setProductCart] = useState([]);
  return (
    <ProductContext.Provider value={{ productCart, setProductCart }}>
      {props.children}
    </ProductContext.Provider>
  );
}
export default ProductProvider;
