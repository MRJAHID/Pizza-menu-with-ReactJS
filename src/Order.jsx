import React from 'react';

const Order = ({closeHours}) => {
    return (
        <div className='order'>
            <p> We're Open Until {closeHours}:00. Come visit us or Order Online.</p>
            <button className='btn'>Order</button>
        </div>
    );
};

export default Order;