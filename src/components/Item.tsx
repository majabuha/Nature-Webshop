import React, { useContext, useState } from 'react';
import { AppContext } from '../state/context'
import { addProduct } from '../state/reducer';
import { IoMdArrowDropdownCircle, IoMdArrowDropupCircle } from 'react-icons/io';
import { BsCartPlusFill } from 'react-icons/bs';

const Item: React.FC<ItemProps> = ({ item }) => {
    
    const [hideContent, sethideContent] = useState(true);

    const { dispatch } = useContext(AppContext);

    return (
        <li className="product--item">
            <h2 data-testid="title">{item.name}</h2>
            <img
                src={item.imageUrl}
                alt={item.name} />
            {hideContent && item.description.length < 80 ?
                <p>{item.description}</p> :
                hideContent && item.description.length > 80 ?
                    <p>
                        {item.description.substr(0, 80)}...
                        <button
                            className="product--button"
                            onClick={() => sethideContent(!hideContent)}>
                            <IoMdArrowDropdownCircle />
                        </button>
                    </p>
                    :
                    <p>
                        {item.description}
                        <button
                            className="product--button"
                            onClick={() => sethideContent(!hideContent)}>
                            <IoMdArrowDropupCircle />
                        </button>
                    </p>}
            <span
                className="product--span">
                <p>Price: {item.price},- </p>
                <button
                    className="product--button large"
                    onClick={() => dispatch(addProduct(item))}>
                    <BsCartPlusFill />
                </button>
            </span>


        </li >
    )
};

export default Item;
