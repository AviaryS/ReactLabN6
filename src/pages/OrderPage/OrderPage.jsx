import React from 'react';

function OrderPage({order}) {
    return (
        <div>
            {order.map((dog) => {
                return (
                    <div className='dog'>
                        <p>{dog.name}</p>
                    </div>
                )
            })}
            {order.length === 0 && <h1>Заказов нет</h1>}
        </div>
    );
}

export default OrderPage;