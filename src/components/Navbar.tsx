import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../state/context'
import { toggleShoppingCart, clearFilter, searchProduct } from '../state/reducer';
import { FaShoppingBasket, FaSearch, FaHome } from 'react-icons/fa';

const style = { color: "white", fontSize: "1em", backgroundColor: 'transparent', border: 'none', marginRight: '10px', marginLeft: '10px' }

const Navbar = () => {
    const { state, dispatch } = useContext(AppContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [updateSearchTerm, setUpdateSearchTerm] = useState("")

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setUpdateSearchTerm(searchTerm)
    }

    const searchResults = (updateSearchTerm: string) => {
        if (updateSearchTerm.length > 2) {
            dispatch(searchProduct(updateSearchTerm))
        } else {
            dispatch(clearFilter())
        }
    }

    useEffect(() => {
        searchResults(updateSearchTerm)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [updateSearchTerm])

    let totalAmount = state.products.map(item => item.amount)
    let sumAmount = totalAmount.reduce(function (a, b) {
        return a + b;
    }, 0);

    return <ul className="navbar--container">
        <li className="navbar--item">
            <button
                className="navbar--button"
                data-testid="clearFltBtn"
                onClick={() => dispatch(clearFilter())}>
                <FaHome style={style} />
            </button>

            <form 
            className='search-bar'
            onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='navbar-input'
                    placeholder="Enter product.."
                    value={searchTerm}
                    onChange={handleChange} />
                <button
                    className='search-btn'
                    type="submit"
                    data-testid="submitBtn"
                    style={style} >
                    <FaSearch />
                </button>
            </form>
        </li>
        <li
            className="navbar--item"
            data-testid="navbarBtn">

            {state.showShoppingCart ?
                <button
                    className="navbar--button"
                    onClick={() => dispatch(toggleShoppingCart())}>

                </button> :
                <button
                    className="navbar--button"
                    onClick={() => dispatch(toggleShoppingCart())}>

                </button>}
            <span
                className="navbar--shoppingamount"
                onClick={() => dispatch(toggleShoppingCart())}>
                <FaShoppingBasket style={style} />
                <span className="navbar--shoppingamount__number">
                    {sumAmount}
                </span>
            </span>
        </li>
    </ul>;
};

export default Navbar