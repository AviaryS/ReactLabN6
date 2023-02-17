import React from 'react';

function OrderPage({order}) {
    return (
        <div>
            {order.map((dog, index) => {
                return (
                    <div className='order'>
                        <h3>Заказ #{index + 1}</h3>
                        {dog.map((item) => {
                            return (
                                <div>
                                    {item.name}
                                    {item.count}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
            {order.length === 0 && <h1>Заказов нет</h1>}
        </div>
    );
}

export default OrderPage;
