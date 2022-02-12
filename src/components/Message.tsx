import React, { useContext, useEffect } from 'react';
import { AppContext } from '../state/context';
import { hideMessage } from '../state/reducer';
import { BsCheckLg } from 'react-icons/bs';

const Message = () => {
    const { state, dispatch } = useContext(AppContext);
    useEffect(() => {
        setTimeout(() => {
            dispatch(hideMessage())
        }, 2000);

    }, [dispatch]);


    return <div
        className="alert--message"
        data-testid="alertMessage">

        {state.showAddedItem ?
            <p >
                The {state.lastAddedItem.name} was succesfully added to your shopping cart
                <BsCheckLg />
            </p>
            : null}
        {state.showRemovedItem ?
            <p>
                The {state.lastRemovedItem.name} was succesfully removed from your shopping cart
                <BsCheckLg />
                </p>
            : null}
    </div>;
};

export default Message;
