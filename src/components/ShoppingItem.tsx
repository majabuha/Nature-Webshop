import React, { useContext } from 'react';
import { AppContext } from '../state/context'
import { decreaseItem, increaseItem, removeItem } from '../state/reducer';
import { AiFillMinusCircle, AiFillPlusCircle, AiFillCloseSquare } from 'react-icons/ai';

const Item: React.FC<ShoppingItemProps> = ({ item }) => {
    const { dispatch } = useContext(AppContext);
    return (
        <li className="shopping--item">
            <span
                className="shopping--span">
                <h3 data-testid="name">{item.name}</h3>
                <img src={item.imageUrl} alt={item.name} />
            </span>
            <p data-testid="price">Price: {item.price},-</p>
            <span
                className="shopping--span">
                <p data-testid="amount">Amount: {item.amount}</p>
                <button
                    className="shopping--button"
                    data-testid="decreaseBtn"
                    onClick={() => dispatch(decreaseItem(item))}>
                    <AiFillMinusCircle />
                </button>
                <button
                    className="shopping--button"
                    data-testid="increaseBtn"
                    onClick={() => dispatch(increaseItem(item))}>
                    <AiFillPlusCircle />
                </button>
                <button
                    className="shopping--button dark"
                    data-testid="removeBtn"
                    onClick={() => dispatch(removeItem(item))}>
                    <AiFillCloseSquare />
                </button>
            </span>
            <div className="shopping--line"></div>
        </li>
    )
};

export default Item;
