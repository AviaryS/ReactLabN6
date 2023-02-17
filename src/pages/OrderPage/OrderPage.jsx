import React from 'react';

function OrderPage({order}) {
    return (
        <div>
            <h1>Заказы</h1>
            {order.map((dog) => {
                return (
                    <div className='order'>
                        <h4>Заказ</h4>
                        {dog.map((item) => {
                            return (
                                <div>
                                    {item.name}
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
