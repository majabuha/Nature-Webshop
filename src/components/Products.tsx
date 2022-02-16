import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../state/context'
import Item from './Item'
//import data from '../data.json'

const Products = () => {
    
    const { state } = useContext(AppContext);

    localStorage.setItem('products', JSON.stringify(state.overview))
 
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