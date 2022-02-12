import React, { useContext, useEffect, useState } from 'react';
import { UserData } from '../type/Users';
import { IState } from '../state/state'
import Products from './Products';
import { AppContext } from '../state/context'
import data from '../data.json'


function LogIn() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [title, setTitle] = useState('');
    const [details, setDetails] = useState('');
    const [price, setPrice] = useState(0);
    const [lager, setLager] = useState(0);
    const [image, setImage] = useState<Blob[]>([]);
    const [imageURL, setImageURL] = useState<any>('');

    const [products, setProducts] = useState<any>([]);

    // const { state } = useContext(AppContext);

    const initialData: UserData = {
        id: Date.now(),
        username: username,
        password: password,
    };

    const newProduct: ProductType = {
        id: Date.now(),
        name: title,
        description: details,
        imageUrl: imageURL,
        price: price,
        lager: lager,
        amount: 0,
        totalPrice: 0
    }

    const logInBtn = () => {
        if (!username || !password) {
            console.log('Please fill in all the details');
            return;
        }

        if (username === 'user@user.com' && password === 'user') {

            console.log('user logged in');
            localStorage.setItem('users', JSON.stringify(initialData));

        } else if (username === 'admin@admin.com' && password === 'admin') {

            console.log('user logged in');
            localStorage.setItem('users', JSON.stringify(initialData));

        } else if (username !== 'user@user.com' && password == 'user'
            || username == 'user@user.com' && password !== 'user') {

            alert('Username or password inccorect. Try again.')

        } else if (username !== 'admin@admin.com' && password == 'admin'
            || username == 'admin@admin.com' && password !== 'admin') {

            alert('Username or password inccorect. Try again.')

        } else {

            alert('user not found')
            console.log('user not found');
        }
    };

    const logout = () => {
        setUsername("");
        setPassword("");
        localStorage.removeItem("users");
        window.location.reload();
        console.log('show');
    }

    function uploadImage(e: any) {
        setImage([...e.target.files]);
    }

    let newUpdate: Array<object> | null = [];

    const postProduct = () => {
        if (!title || !details || !price || !lager) {
            console.log('Please fill in all the details');
            return;
        }
        let products = localStorage.getItem('products');

        // let productsParsed = JSON.parse(products || '{}')
        //  console.log(products);

        if (products?.length) {
            console.log('posting-product');

            newUpdate = JSON.parse(products);
            console.log(newUpdate);

            newUpdate?.push(newProduct);
            console.log(newUpdate);

            localStorage.setItem('products', JSON.stringify(newUpdate));

        } else {
            localStorage.setItem('products', JSON.stringify(newProduct));
            console.log('test-product');

        }
        setProducts(newUpdate)
        console.log(newUpdate);
    };

    // let test = localStorage.getItem('products')
    // console.log(test);

    if (!localStorage.getItem('products')) {
        localStorage.setItem('products', JSON.stringify(data));
        setProducts(data);
        console.log(data)
    }


    useEffect(() => {
        if (localStorage.getItem('products')) {
            let fetchProducts = JSON.parse(localStorage.getItem('products') || '[]');

            setProducts(fetchProducts);
            console.log(fetchProducts)
        };

    }, []);

    useEffect(() => {
        if (image.length < 1) {
            return;
        }

        let reader = new FileReader();
        reader.readAsDataURL(image[0]);

        reader.onload = function () {
            setImageURL(reader.result);
        };
    }, [image]);


    var isLoggedIn = localStorage.getItem('users')
    var adminIsLoggedIn = JSON.parse(localStorage.getItem('users') || '{}');


    return <div>
        {isLoggedIn ?
            <p
                className='log-out-button'
                data-testid="logoutBtn"
                onClick={() => logout()}>
                Log Out
            </p>
            :
            <form className="login-form-wrapper" action="/">

                <div className="login-wrapper">

                    <div>
                        <label htmlFor="">
                            Username:{' '}
                            <input
                                type="name"
                                data-testid="username"
                                placeholder="Type your username here"
                                onChange={e => {
                                    setUsername(e.target.value);
                                }}
                                required
                            />
                        </label>
                    </div>

                    <div>
                        <label htmlFor="">
                            Password:{' '}
                            <input
                                data-testid="password"
                                type="password"
                                value={password}
                                placeholder="Type your password here"
                                onChange={e => {
                                    setPassword(e.target.value);
                                }}
                                required
                            />
                        </label>
                    </div>


                    <div className="login-button">
                        <button
                            data-testid="post-button"
                            className="login-botun"
                            onClick={logInBtn}>
                            LOG IN
                        </button>
                    </div>

                </div>

            </form>

        }

        {
            adminIsLoggedIn.username === 'admin@admin.com' ? (

                

                    <form className='admin-new-product'>

                        <div className="create-product-title">
                            <label htmlFor="">
                                Product Name:{' '}
                                <input
                                    type="text"
                                    placeholder="Name for your product"
                                    onChange={e => {
                                        setTitle(e.target.value);
                                    }}
                                />
                            </label>
                        </div>

                        <div className="create-product-details">
                            <label htmlFor="">
                                Product Details:{' '}
                                <input
                                    type="text"
                                    placeholder="Describe your product"
                                    onChange={e => {
                                        setDetails(e.target.value);
                                    }}
                                />
                            </label>
                        </div>

                        <div className="create-product-price">
                            <label htmlFor="">
                                Product Price:{' '}
                                <input
                                    type="number"
                                    placeholder="Product price"
                                    onChange={e => {
                                        setPrice(parseInt(e.target.value));
                                    }}
                                />
                            </label>
                        </div>

                        <div className="create-items-left">
                            <label htmlFor="">
                                Product In stock:{' '}
                                <input
                                    type="number"
                                    placeholder="Items left"
                                    onChange={e => {
                                        setLager(parseInt(e.target.value));
                                    }}
                                />
                            </label>
                        </div>

                        <div className="create-product-img">
                            <label>
                                Select product image:{' '}
                                <input type="file" accept="image/*" onChange={uploadImage} />
                            </label>
                            <img className='newly-added-img' src={imageURL} alt="" />
                        </div>

                        <div className="create-product-button">
                            <button
                                data-testid="add-button"
                                className='add-new-product'
                                onClick={postProduct}>
                                Add product
                            </button>
                        </div>
                    </form>
                
            )
                :
                null
        }



    </div>;
}

export default LogIn;

