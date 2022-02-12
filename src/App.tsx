import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import ShoppingCart from './components/ShoppingCart';
import Products from './components/Products'
import Message from './components/Message'
import { AppContext } from './state/context';
import { reducer } from './state/reducer';
import { initialState } from './state/state';
import Login from './components/Login'



const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);



  return (

    <AppContext.Provider value={{ state, dispatch }}>

      <Login />

      <h1 className='main-title-app'>Arden's nature shop</h1>

      <div className="app--container">
        {state.showAddedItem || state.showRemovedItem ? <Message /> : null}

        <Navbar />

        <div className="content--container">

          <Products />

          {state.showShoppingCart ? <ShoppingCart /> : null}

        </div>

      </div>

    </AppContext.Provider>

  )
}


export default App
