import React from 'react';
import './Contact.css';

function Contact(props) {
    return (
        <div className='Contact'>
            <img className='avatar' src={props.image} alt={props.name} />
            <div>
                <h4 className='name'>{props.name}</h4>
                <div className='status'>
                    <span className={props.online ? 'status-online' : 'status-offline'}></span>
                    <span className='status-text'>{props.online ? 'Online' : 'Offline'}</span>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;