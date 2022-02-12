import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/context'
import Item from './Item'
//import data from '../data.json'

const Products = () => {
    //const [products, setProducts] = useState<any>([]);
    
    const { state } = useContext(AppContext);

    localStorage.setItem('products', JSON.stringify(state.overview))
 
    // if (!localStorage.getItem('products')) {
    //     localStorage.setItem('products', JSON.stringify(data));
    //     setProducts(data);
    //     console.log(data)
    //   }

    //   useEffect(() => {
    //     if (localStorage.getItem('products')) {
    //       let fetchProducts = JSON.parse(localStorage.getItem('products') || '[]');
    
    //       setProducts(fetchProducts);
    //       console.log(fetchProducts)
    //     };      
    
    //   }, []);



    return (


        <div className="overview--container">            
            <ul 
            className="product--container"            
            data-testid="productsUl">
                {state.overview && state.overview.map((item: ProductType) => (
                    <Item key={item.id} item={item} />
                ))}
            </ul>
        </div>

    )
};

export default Products