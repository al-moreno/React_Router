import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) =>{

    return ReactDOM.createPortal(
        <div className ='ui dimmer show modals visible active'>
            <div className='ui raised very padded text container segment'>
                <h2>Another Modal Example</h2>
            </div>
        </div>,
        document.querySelector('#modal')
    )
};

export default Modal;